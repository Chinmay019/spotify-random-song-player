import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Code from "./components/Code";
import { SpotifyProvider } from "./context/SpotifyContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Pages/Trending";
import Playlist from "./components/Playlists/Playlists";
import Player from "./components/Player/Player";

function App() {
  return (
    <SpotifyProvider>
      <Router>
        <div className="main-container">
          <Sidebar />
          <div className="page-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/player" element={<Player />} />
              <Route
                path="/player/:playlist_id/:song_id"
                element={<Player />}
              />
              <Route path="/playlists" element={<Playlist />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/callback?/:code" element={<Code />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SpotifyProvider>
  );
}

export default App;
