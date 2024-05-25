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
      <div className="main-page-title">
      <h1>Artists Page</h1>
      </div>
      <div className="main-container">
      {musicLibrary.map((music, index) => (
          <div className="music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <img src={music.image} alt={music.image} className="musicPicture"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;
