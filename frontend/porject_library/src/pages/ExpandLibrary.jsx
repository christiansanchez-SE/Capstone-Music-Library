import React, { useState, useEffect } from "react";
// importing api and specified functions from the music-api
import {
  addMusic,
  getMusic,
  updateMusic,
  deleteMusic,
} from "../utility/music-api";

function ExpandLibrary() {
  // All valuse below holds the state variables and setter functions values for the new music that will be added or edited
  // The set variables helps update the data
  const [title, setMusicTitle] = useState("");
  const [artist, setMusicArtist] = useState("");
  const [genre, setMusicGenre] = useState("");
  const [image, setMusicImage] = useState("");

  // Using for editing when placed into editing mode
  // The editPhase is a variable that will help determine when the form is in editing mode
  // editID holds the ID that will be used for edit, its set to null so if user isnt editing anything it will remain null, otherwise it will hold the ID of the music waiting to be edited
  const [editPhase, setEditPhase] = useState(false);
  const [editID, setEditId] = useState(null);

  // - - - - - - - - - - - - - - - - This handles the adding of music - - - - - - - - - - - - - - - - //
  const handleAdd = async (event) => {
    // Will stop the page from reloading when the change happens
    // It gets called when user submits form
    event.preventDefault();

    // Preps the new music form by adding the title, artist, genre, and images
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
    // When successful the resetsForm will reset the input values that was made from the user
    // getMusic refreshes the page after data is added
    try {
      await addMusic(musicData);
      resetsForm();
      getMusic(setMusicLibrary);
    } catch (error) {
      console.error("Error adding music:", error);
    }
  };

  // - - - - - - - - - - - - - - - - This handles the updating of music - - - - - - - - - - - - - - - - //
  const handleUpdate = async (event) => {
    // Will stop the page from reloading when the change happens
    // It gets called when user submits form
    event.preventDefault();

    // Contains the music form by editing the title, artist, genre, and images
    // For each submission of genre, .split methods splits genre and turns it into a new array
    // Will map through each genreItem and trims any excess space
    // For each submission of image it will edit the new image that user provides if there isnt one the default image gets added
    const musicData = {
      title,
      artist,
      genre: genre.split(",").map((genreItem) => genreItem.trim()),
      image:
        image ||
        "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    };

    // updateMusic will call on the mongoDB Api to add the edit music by there id
    // When successful the resetsForm will reset the input values that was made from the user
    // If theres no edits happening the editID will remain null and the editing phase will be set to false
    // getMusic refreshes the page after data is added
    try {
      await updateMusic(editID, musicData);
      resetsForm();
      setEditId(null);
      setEditPhase(false);

      // getMusic refreshes the page after data is added
      getMusic(setMusicLibrary);
    } catch (error) {
      console.error("Error updating music:", error);
    }
  };

  const handleEdit = (music) => {
    // Sets the form inputs to the values of the selected item
    // Sets the editID to the selected item and turns editPhase to true
    setMusicTitle(music.title);
    setMusicArtist(music.artist);
    setMusicGenre(music.genre.join(", "));
    setMusicImage(music.image);
    setEditId(music._id);
    setEditPhase(true);
  };

  // - - - - - - - - - - - - - - - - This handles the deleting of music - - - - - - - - - - - - - - - - //
  const handleDelete = async (music) => {
    try {
      // Calls on the deleteMusic function passing on the id of the music to be deleted
      await deleteMusic(music._id);

      // Updates the musicLibrary state by removing the deleted music fromt the list
      setMusicLibrary((previousMusicLibrary) =>
        previousMusicLibrary.filter((item) => item._id !== music._id)
      );
    } catch (error) {
      console.log("Error deleting music:", error);
    }
  };

  //This helps resets the form
  const resetsForm = () => {
    setMusicTitle("");
    setMusicArtist("");
    setMusicGenre("");
    setMusicImage("");
  };

  // musicLibrary is a state varaible with an empty array that holds current data
  // setMusicLibrary helps update musicLibrary state
  const [musicLibrary, setMusicLibrary] = useState([]);

  // - - - - - - - - - - - - - - - useEffect - - - - - - - - - - - - - - - //
  // This effect runs when the component is first displayed and it will fetch the music data from the api and updates
  useEffect(() => {
    // getMusic is called, which is an async function defined in "music-api.jsx"
    // setMusicLibrary is passed to "getMusic" so it can update the state once the data is fetched
    getMusic(setMusicLibrary);
    // The empty array is the second argument, which will run once when components mount
  }, []);

  return (
    <div className="expand-library">
      <div className="expand-library-form-container">
        <form
          action=""
          method="post"
          id="expand-library-form"
          // onSubmit got put into a ternary for editing purposes, once the edit button is clicked the form turns into edit phase. If its not it will remain in adding phase
          onSubmit={editPhase ? handleUpdate : handleAdd}
        >
          <div id="expand-library-form-body">
            <div id="expand-library-welcome-lines">
              <div id="expand-library-welcome-line-1">Welcome</div>
              <div id="expand-library-welcome-line-2">{ editPhase ? "Update our music library" : "Add to our music library" }</div>
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
                <div id="expand-library-submit-button-cvr">
                  <button id="expand-library-submit-button" type="submit">
                    {editID ? "Update Music" : "Add Music"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="expand-library-main-container">
        {/* Map helps map through the music library and creates a new div to show the music, music being the current item in the array and index being the position */}
        {musicLibrary.map((music, index) => (
          // the key index is a unique identfier for each item
          <div className="expand-library-music-library" key={index}>
            <div className="expand-library-content">
            <h2>Artist: {music.artist}</h2>
            <h2>Song: {music.title}</h2>
            <img
              src={music.image}
              alt={music.title}
              className="expand-library-musicPicture"
            />
            {/* will help genre be joined by a space and a comma */}
            <p className="expand-library-genre">Genre: {music.genre.join(", ")}</p>
            </div>

            <div className="expand-library-btn-container">
              {/* Once handleEdit function gets called it fills the form with the muisc user wants to edit */}
            <button className="expand-library-btn" onClick={() => handleEdit(music)}>Edit</button>
            <button className="expand-library-btn" onClick={() => handleDelete(music)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpandLibrary;