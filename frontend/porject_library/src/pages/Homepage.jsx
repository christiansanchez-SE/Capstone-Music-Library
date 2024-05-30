import React, { useState, useEffect } from "react";
// importing api from the music-api
import { getMusic } from "../utility/music-api";
import { Link } from "react-router-dom";

function Homepage() {
  
  // Initalizing state variable using musicLibrary, with an empty array
  // setMusicLibrary function is used to update the state (empty array)
  const [musicLibrary, setMusicLibrary] = useState([]);

  // Initalizing state variable using musicLibrary, with an inital value of 0. This will help to find the frist item in the musicLibrary array.
  // currentMusicLib will help keep track of which song/artist in musicLibrary
  // setCurrentMusicLib is the function to be used to update the currentMusicLib
  const [currentMusicLib, setCurrentMusicLib] = useState(0);

  // When the homepage first loads, getMusic function gets called from the music-api.jsx and data will be put into musicLibrary
  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  // This effect helps a set timer for our carousel
  // It will change every 5 seconds and will move to the next artist/song/image then wil loop back to the beginning
  useEffect(() => {
    // .length checks if theres any songs in our data
    if (musicLibrary.length > 0) {
      // We start the timer with interval that will go every 5 seconds
      const timer = setInterval(() => {
        // +1 will go to the next song and once at the end it will loop again by using % .length
        setCurrentMusicLib(
          (previousIndex) => (previousIndex + 1) % musicLibrary.length
        );
      }, 5000);
      return () => clearInterval(timer);
    }
    // Will help the useEffect run and update correctly
  }, [musicLibrary.length]);

  // If no music has been added loading message will appear
  if (musicLibrary.length === 0) {
    return <div>Loading Please Wait</div>;
  }

  // When data is added, it will find the current song
  const currentMusicArtist = musicLibrary[currentMusicLib];

  return (
    <div className="homepage">
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
              Explore a world of music. Build playlists, add your favorite
              tracks, and share with friends.
            </div>

            <div className="homepage-containerThree">
              <Link to="/Playlist" className="homepage-link">
                Start Your Music Journey Now!
              </Link>
            </div>
            {/* <div className="homepage-containerFour">Connect with Us</div> */}
          </div>

          <div className="hompage-card">
            <div className="homepage-music-library">
              {/* Helps map through the music library and displays the content*/}
              {musicLibrary.map((music, index) => (
                <img
                  key={index}
                  src={music.image}
                  alt={music.artist}
                  // If index matches the currentMusicLib we add the show className on top of musicPicture
                  className={
                    "musicPicture " + (index === currentMusicLib ? "show" : "")
                  }
                />
              ))}
              <div className="song-artist">
                <h2>Artist: {currentMusicArtist.artist}</h2>
                <h3>Song: {currentMusicArtist.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
