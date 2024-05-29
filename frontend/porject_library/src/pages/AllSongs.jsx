import React, { useState, useEffect } from "react";
// importing api from the music-api
import { getMusic } from "../utility/music-api";
// import { Link } from "react-router-dom";

function AllSongs() {
  // musicLibrary holds the array of music data fetched from the backend
  // setMusicLibrary is a function to update the musicLibrary
  const [musicLibrary, setMusicLibrary] = useState([]);

  // getMusic is called, which is an async function defined in "music-api.jsx"
  // setMusicLibrary is passed to "getMusic" so it can update the state once the data is fetched
  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  return (
    <div className="allSongs">
      <div className="allSongs-main-page-title">
        <h1>Music Library</h1>
      </div>
      <div className="allSongs-main-container">

        {/* Helps map through the music library, having music as the current item in the array and index is the current position of the item */}
        {musicLibrary.map((music, index) => (
          // For each music item it creates a div with the key=index value
          <div className="allSongs-music-library" key={index}>
            {/* music.image will display the image */}
            <img src={music.image} alt={music.image} className="allSongs-musicPicture" />
            <h2>{music.title}</h2>
            <p>Artist: {music.artist}</p>
            {/* will help genre be joined by a space and a comma */}
            <p>Genre: {music.genre.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSongs;