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
    if (musicLibrary.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % musicLibrary.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [musicLibrary.length]);

  if (musicLibrary.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMusic = musicLibrary[currentIndex];

  return (
    <div className="homePage">
      <div className="hompage-container">

        <div className="hompage-title">
          <div className="music-library-title">Music Library</div>
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
              <Link to="/Playlist" className="homepage-link">Start Your Music Journey Now!</Link>
            </div>
            {/* <div className="homepage-containerFour">Connect with Us</div> */}
          </div>

          <div className="hompage-card">
            <div className="homepage-music-library">
              {musicLibrary.map((music, index) => (
                <img
                  key={index}
                  src={music.image}
                  alt={music.artist}
                  className={`musicPicture ${
                    index === currentIndex ? "show" : ""
                  }`}
                />
              ))}
              <div className="song-artist">
                <h2>Artist: {currentMusic.artist}</h2>
                <h3>Song: {currentMusic.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Homepage;
