import React, { useState, useEffect } from "react";
import { getMusic } from "../utility/music-api";

function Artists() {
  // musicLibrary holds the array of music data fetched from the backend
  // setMusicLibrary is a function to update the musicLibrary
  const [musicLibrary, setMusicLibrary] = useState([]);

  // getMusic is called, which is an async function defined in "music-api.jsx"
  // setMusicLibrary is passed to "getMusic" so it can update the state once the data is fetched
  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);
  return (
    <div className="artistsPage">
      <div className="artist-main-page-title">
      <h1>Artists Page</h1>
      </div>
      <div className="artist-main-container">
        {/* Helps map through the music library, having music as the current item in the array and index is the current position of the item */}
      {musicLibrary.map((music, index) => (
          // For each music item it creates a div with the key=index value
          <div className="artist-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            {/* music.image will display the image */}
            <img src={music.image} alt={music.image} className="artist-musicPicture"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;
