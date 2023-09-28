// import React, { useContext } from "react";
// import SpotifyContext from "../context/SpotifyContext";
// import _ from "lodash";
// function Selected() {
//   const { selectedPlaylists } = useContext(SpotifyContext);
//   return (
//     <div className="flex mx-6">
//       {!_.isEmpty(selectedPlaylists) && selectedPlaylists.length && (
//         <div className="shadow-lg grow flex rounded-r-none w-3/4 bg-base-200 rounded-lg border-base-content items-center px-5">
//           {selectedPlaylists.map((each) => (
//             <span
//               key={each.playlist_id}
//               className="text-lg ml-2 italic font-semibold"
//             >
//               {each.playlist_name}
//             </span>
//           ))}
//         </div>
//       )}
//       <button className="btn btn-accent rounded-l-none">Shuffle Play</button>
//     </div>
//   );
// }

// export default Selected;
