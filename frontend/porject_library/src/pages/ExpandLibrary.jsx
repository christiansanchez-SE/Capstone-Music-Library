import React, { useState, useEffect } from "react";
// importing api from the music-api
import { addMusic, getMusic, updateMusic } from "../utility/music-api";

function ExpandLibrary() {
  // All valuse below holds the input values for the new music that will be added
  // The set variables helps update the data
  const [title, setMusicTitle] = useState("");
  const [artist, setMusicArtist] = useState("");
  const [genre, setMusicGenre] = useState("");
  const [image, setMusicImage] = useState("");
  const [editID, setEditId] = useState(null);

  // - - - - - - - - - - - - - - - - This handles the adding of music - - - - - - - - - - - - - - - - //
  const handleAdd = async (event) => {
    // Will stop the page from reloading when the change happens
    event.preventDefault();

    // Contains the new music form by adding the title, artist, genre, and images
    // For each submission of genre, .split methods splits genre and turns it into a new array
    // Will map through each genreItem and trims any excess space
    // For each submission of image it will add the new image that user provides if there isnt one the default image gets added
    const musicData = {
      title,
      artist,
      genre: genre.split(",").map((genreItem) => genreItem.trim()),
      image:
        image ||
        "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    };

    // addMusic will call on the mongoDB Api to add the new music
    // getMusic refreshes the page after data is added
    try {
      await addMusic(musicData);
      setMusicTitle("");
      setMusicArtist("");
      setMusicGenre("");
      setMusicImage("");
      getMusic(setMusicLibrary);
    } catch (error) {
      console.error("Error adding music:", error);
    }
  };

  // - - - - - - - - - - - - - - - - This handles the updating of music - - - - - - - - - - - - - - - - //
  const handleUpdate = async (event) => {
    // Will stop the page from reloading when the change happens
    event.preventDefault();

    const musicData = {
      title,
      artist,
      genre: genre.split(",").map((genreItem) => genreItem.trim()),
      image:
        image ||
        "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    };

    // addMusic will call on the mongoDB Api to add the new music
    // getMusic refreshes the page after data is added
    try {
      await updateMusic(editID, musicData);
      setMusicTitle("");
      setMusicArtist("");
      setMusicGenre("");
      setMusicImage("");
      setEditId(null);
      getMusic(setMusicLibrary);
    } catch (error) {
      console.error("Error adding music:", error);
    }
  };
  const handleEdit = (music) => {
    setMusicTitle(music.title);
    setMusicArtist(music.artist);
    setMusicGenre(music.genre.join(", "));
    setMusicImage(music.image);
    setEditId(music._id);
  }

  // musicLibrary is a state varaible that holds current data
  // setMusicLibrary helps upadte musicLibrary state
  const [musicLibrary, setMusicLibrary] = useState([]);

  // getMusic is called, which is an async function defined in "music-api.jsx"
  // setMusicLibrary is passed to "getMusic" so it can update the state once the data is fetched
  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  return (
    <div className="expand-library">
      <div className="expand-library-form-container">
        <form action="" method="post" id="expand-library-form" onSubmit={handleAdd}>
          <div id="expand-library-form-body">
            <div id="expand-library-welcome-lines">
              <div id="expand-library-welcome-line-1">Welcome</div>
              <div id="expand-library-welcome-line-2">
                {editID ? "Add music to our library" : "Update music in our library"}
              </div>
              <div id="expand-library-input-area">
                <div className="expand-library-form-inp">
                  {/* Value gets set to the state variable, the onChange event updates the state variable with the current value of the input field whenever its typed into the field */}
                  {/* Adding the onChange event handler with event as the parameter for the function, it contains the event object that contains information about the change, this will update everytime the user inputs something in the text field */}
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setMusicTitle(event.target.value)}
                    required
                  />
                </div>
                <div className="expand-library-form-inp">
                  {/* This would be the same as the first input */}
                  <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(event) => setMusicArtist(event.target.value)}
                    required
                  />
                </div>
                <div className="expand-library-form-inp">
                  {/* This would be the same as the first input */}
                  <input
                    type="text"
                    placeholder="Genre (comma separated)"
                    value={genre}
                    onChange={(event) => setMusicGenre(event.target.value)}
                    required
                  />
                </div>
                <div className="expand-library-form-inp">
                  {/* This would be the same as the first input, but the input field is not required */}
                  <input
                    type="text"
                    placeholder="Image URL (optional)"
                    value={image}
                    onChange={(event) => setMusicImage(event.target.value)}
                  />
                </div>
                <div id="submit-button-cvr">
                  <button id="submit-button" type="submit">
                    {editID ? "Update Music" : "Add Music"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="expand-library-main-container">
        {/* Helps map through the music library and displays the content*/}
        {musicLibrary.map((music, index) => (
          <div className="expand-library-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <h2>{music.title}</h2>
            <img
              src={music.image}
              alt={music.title}
              className="expand-library-musicPicture"
            />
            {/* will help genre be joined by a space and a comma */}
            <p>Genre: {music.genre.join(", ")}</p>
            <button onClick={() => handleEdit(music)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpandLibrary;
