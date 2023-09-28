// import React, { useContext, useState, useEffect } from "react";
// import { FaCirclePlay, FaBackwardStep, FaForwardStep } from "react-icons/fa6";
// import SpotifyContext from "../../context/SpotifyContext";
// import { PlaySong } from "../../context/Action";
// import _ from "lodash";

// function Player() {
//   // const [playing, setPlaying] = useState(false);
//   // const [audio, setAudio] = useState(new Audio());

//   const { isLoggedIn, currentlyPlaying, access_token } =
//     useContext(SpotifyContext);

//   // useEffect(() => {
//   //   if (isLoggedIn) {
//   //     const playsongfunc = async () => {
//   //       if (!_.isEmpty(currentlyPlaying)) {
//   //         const uri = currentlyPlaying?.uri;
//   //         console.log("access_token in playsong", access_token);
//   //         console.log("uri in playsong", uri);
//   //         const data = await PlaySong(uri, access_token);
//   //         console.log("data", data);
//   //         // if (data.status == 204) {
//   //         //   setPlaying(true);
//   //         // }
//   //       }
//   //     };
//   //     playsongfunc();
//   //   }
//   // }, [currentlyPlaying]);

//   if (!isLoggedIn) {
//     return (
//       <div>
//         Pls Login
//         <button className="btn btn-primary">Login</button>
//       </div>
//     );
//   }
//   return (
//     <footer className="footer flex w-full h-[6vw] sticky bg-base-200 items-center px-5 justify-between sticky bottom-0">
//       <div>Image container</div>
//       <div className="">
//         {/* {currentlyPlaying?.preview_url && (
//           <div>
//             <audio
//               controls
//               src={`${currentlyPlaying.preview_url}`}
//               type="audio/mpeg"
//             ></audio>
//             <audio
//               controls
//               src={`${currentlyPlaying.uri}`}
//               type="audio/mpeg"
//             ></audio>
//           </div>
//         )}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           name="Range"
//           id="songPlayerProgress"
//           className="w-[80vh]"
//         ></input> */}
//         <div className="flex justify-center m-auto">
//           <FaBackwardStep size={25} className="m-3" />
//           <FaCirclePlay size={25} className="m-3" />
//           <FaForwardStep size={25} className="m-3" />
//         </div>
//       </div>
//       <div>Controls container</div>
//     </footer>
//   );
// }

// export default Player;
