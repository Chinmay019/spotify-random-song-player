import constants from "../assets/constants";
import Axios from "axios";

export const authorizeUser = async () => {
    let codeVerifier = generateRandomString(128);
    localStorage.setItem('code_verifier', codeVerifier);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const params = new URLSearchParams({
        client_id: constants.CLIENT_ID,
        response_type: "code",
        redirect_uri: constants.REDIRECT_URI,
        scope: constants.SCOPE,
        code_challenge_method: "S256",
        code_challenge: codeChallenge
    })
    window.location = `${constants.AUTHORIZE_URL}?${params}`
    // const response = await fetch(`${constants.AUTHORIZE_URL}?${params}`)

    // const data = await response.json();
    // console.log(data)
    // return data;
}


const generateRandomString = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const generateCodeChallenge = async (codeVerifier) => {
    function base64encode(string) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return base64encode(digest);
}

export const getAccessToken = async (code) => {
    let codeVerifier = localStorage.getItem('code_verifier');
    const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: constants.REDIRECT_URI,
        client_id: constants.CLIENT_ID,
        code_verifier: codeVerifier
    });
    /*const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    })
    if (response.status === 200) {
        const data = await response.json();
        console.log("data:", data);
        return data;
    }*/
    return Axios.post('https://accounts.spotify.com/api/token', params)
    // .then((resp) => {
    //     console.log("response:", resp);
    //     if (resp.status == 200) {
    //         return resp.data;
    //     }
    // })
    // .catch((err) => console.log("error:", err))
}

export const getPlaylistInfo = async (access_token) => {
    console.log("access_token in getPlaylistInfo:", access_token)
    const resp = await fetch(`${constants.API_URL}/me/playlists`, {
        method: 'GET',
        headers: { Authorization: "Bearer " + access_token },
    }
    );
    if (resp.status == 200) {
        const playlistData = await resp.json();
        return playlistData;
    }
};

export const getUserInfo = async (access_token) => {
    const resp = await Axios.get(`${constants.API_URL}/me`, {
        headers: { Authorization: "Bearer " + access_token },
    }
    );
    if (resp.status == 200) {
        const userData = resp.data;
        return userData;
    }
}

export const getPlaylistTracks = async (playlist_id, access_token) => {
    const resp = await Axios.get(`${constants.API_URL}/playlists/${playlist_id}/tracks`, {
        headers: { Authorization: "Bearer " + access_token },
    });
    if (resp.status == 200) {
        const data = resp.data;
        const trackData = appendIndexForTracks(data.items);
        return trackData;
    }
}

const appendIndexForTracks = (items) => {
    const indexedItems = items.map((item, index) => {
        let track = item.track;
        if (track && track.preview_url !== null && track.name !== null) {
            track.index = index;
        }
        return item;
    });
    return indexedItems;
}

export const getRandomSong = (tracks) => {
    const randomTrackIndex = Math.floor(Math.random() * tracks.length);
    const track = tracks[randomTrackIndex].track;
    return track;
}

export const getDeviceID = async (access_token) => {
    const resp = await Axios.get(`${constants.API_URL}/me/player/devices`, {
        headers: { Authorization: "Bearer " + access_token },
    });
    if (resp.status == 200) {
        const deviceData = resp.data;
        return deviceData;
    }
}

export const getSongByIndex = (items, index) => {
    let allTracks;
    items.map((item) => allTracks.push(item.tracks));
    const song = allTracks?.filter((track) => track.index === index);
    if (!song) return null;
}

export const PlaySong = async (uris, access_token) => {
    const resp = await Axios.put(`${constants.API_URL}/me/player/play`, {
        headers: { Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
            uris: [uris],
        })
    })

    switch (resp.status) {
        case 204: return true;
        default: return false;
    }
}