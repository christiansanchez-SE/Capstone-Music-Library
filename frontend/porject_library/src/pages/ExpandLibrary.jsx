import React, { useState, useEffect } from "react";
import { addMusic, getMusic } from "../utility/music-api";

function ExpandLibrary() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = async (event) => {
    event.preventDefault();
    const musicData = {
      title,
      artist,
      genre: genre.split(",").map((genreItem) => genreItem.trim()),
      image: image || "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    };
    try {
      await addMusic(musicData);
      setTitle("");
      setArtist("");
      setGenre("");
      setImage("");
      getMusic(setMusicLibrary);
    } catch (error) {
      console.error('Error adding music:', error);
    }
  };

  const [musicLibrary, setMusicLibrary] = useState([]);

  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  return (
    <div className="playlist">
      <div className="playlist-form-container">
        <form action="" method="post" id="playlist-form" onSubmit={handleAdd}>
          <div id="playlist-form-body">
            <div id="playlist-welcome-lines">
              <div id="playlist-welcome-line-1">Welcome</div>
              <div id="playlist-welcome-line-2">
                Add music to expand our library
              </div>
              <div id="playlist-input-area">
                <div className="playlist-form-inp">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>
                <div className="playlist-form-inp">
                  <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                    required
                  />
                </div>
                <div className="playlist-form-inp">
                  <input
                    type="text"
                    placeholder="Genre (comma separated)"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                    required
                  />
                </div>
                <div className="playlist-form-inp">
                  <input
                    type="text"
                    placeholder="Image URL (optional)"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                </div>
                <div id="submit-button-cvr">
                  <button id="submit-button" type="submit">
                    Add Music
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="playlist-main-container">
        {musicLibrary.map((music, index) => (
          <div className="playlist-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <h2>{music.title}</h2>
            <img src={music.image} alt={music.title} className="playlist-musicPicture" />
            <p>Genre: {music.genre.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpandLibrary;
