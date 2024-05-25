import React, { useState, useEffect } from "react";
import { getMusic } from "../utility/music-api";
import { Link } from "react-router-dom";

function Homepage() {
  const [musicLibrary, setMusicLibrary] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % musicLibrary.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [musicLibrary.length]);

  if (musicLibrary.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMusic = musicLibrary[currentIndex];

  return (
    <div className="homePage">
      <div className="hompage-title">
        <h1>Music Library</h1>
      </div>

      <div className="middle-page">
        <div className="homepage-content">
          <div className="homepage-containerOne">
            Discover, Create, and Share Your Ultimate Playlists!
          </div>

          <div className="homepage-containerTwo">
            Explore a world of music at your fingertips. Build playlists, add
            your favorite tracks, and share with friends.
          </div>

          <div className="homepage-containerThree">
            Start Your Music Journey Now
          </div>

          <div className="homepage-containerFour">Connect with Us</div>
        </div>

        <div className="hompage-card">
          <div className="homepage-music-library">
            <h2>Artist: {currentMusic.artist}</h2>
            <img
              src={currentMusic.image}
              alt={currentMusic.artist}
              className="musicPicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
