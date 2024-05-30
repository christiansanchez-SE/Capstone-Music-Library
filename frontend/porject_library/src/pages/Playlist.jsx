import React, { useState, useEffect } from "react";
// importing api from the music-api
import { addMusic, getMusic } from "../utility/music-api";

function Playlist() {

  // Will be used to hold and store the searched music entered by the user
    // This hook iniatlizes searchMusic with an empty string and then will be updated with setSearchMusic
  const [searchMusic, setSearchMusic] = useState("");

  // musicLibrary holds the array of music data fetched from the backend
    // The useState starts off with an empty array, meaning it will start of with no music data
      // setMusicLibrary is a function to update the musicLibrary
  const [musicLibrary, setMusicLibrary] = useState([]);
  
  // This will be used to hold the favroites of the users selected options
    // The useState starts off with an empty array, meaning it will start of with no favorited music data
      // setFavorites will update the favorites array, this will occur when the user adds it to the list
  const [favorites, setFavorites] = useState([]);

  // getMusic is called, which is an async function defined in "music-api.jsx"
  // setMusicLibrary is passed to "getMusic" so it can update the state once the data is fetched
  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  // This function will update the searched music in the input field
  // handleSearch takes a prameter called event which allows the users to be able to interact with the search event
  const handleSearch = (event) => {

    // setSearchMusic allows the update of searchMusic
    // event.target triggers the event which allows the users to type in the search bar and adding value gets the current value of what the user is searching
    setSearchMusic(event.target.value);
  };

  // This function helps filter the musicLibrary based on the searched music, it will only include music that matches the searched input
  const filteredMusic = musicLibrary.filter(
    (music) =>
      music.title.toLowerCase().includes(searchMusic.toLowerCase()) ||
      music.artist.toLowerCase().includes(searchMusic.toLowerCase()) ||
      music.genre.join(", ").toLowerCase().includes(searchMusic.toLowerCase())
  );

  // This function will add the music to the favorited array, it takes music as the parameter which represent the song they want to add to their array
  const handleAddToFavorites = (music) => {

    // favorites is the array that holds the users music array
    // This will checks if there isnt the music in the favorites array, meaning the song has not already been added
    if (!favorites.some((favorite) => favorite._id === music._id)) {

      // setFavorites update the favorites state
      // It then creates a new array of favorites using the spread op and the new music
      setFavorites([...favorites, music]);
    } else {
      return music;
    }
  };

  // This function will remove the music that the user dont want from the favorited array
  const handleRemoveFromFavorites = (musicToRemove) => {
    setFavorites(favorites.filter((music) => music._id !== musicToRemove._id));
  };


  return (
    <div className="playlist">
      <div className="playlist-search-container">
        {/* Value gets set to the state variable, the onChange event updates the state variable with the current value of the input field whenever its typed into the field */}
        <input
        className="playlist-searchbar"
          type="text"
          placeholder="Search Music"
          value={searchMusic}
          onChange={handleSearch}
        />
      </div>

      <div className="playlist-main-container">
        {/* This will display all the music in the current database and/or the music that was searched in the search bar, the filteredMusic is an array that contains the music based on the filtered function */}
        {filteredMusic.map((music, index) => (
          // the key index is a unique identfier for each item
          <div className="playlist-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <h2>{music.title}</h2>
            <img
              src={music.image}
              alt={music.image}
              className="playlist-musicPicture"
            />
            <p>Genre: {music.genre.join(", ")}</p>
            <button className="playlist-btn" onClick={() => handleAddToFavorites(music)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>

        <div className="playlist-fav-title"><h2>Favorites</h2></div>

      <div className="playlist-favorites-container">
        {/* This displays all the music that was added by the user as their favroites */}
        {favorites.map((music, index) => (
          // the key index is a unique identfier for each item
          <div className="playlist-music-library" key={index}>
            <h1>Artist: {music.artist}</h1>
            <h2>{music.title}</h2>
            <img
              src={music.image}
              alt={music.image}
              className="playlist-musicPicture"
            />
            <p>Genre: {music.genre.join(", ")}</p>
            <button className="playlist-btn" onClick={() => handleRemoveFromFavorites(music)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
