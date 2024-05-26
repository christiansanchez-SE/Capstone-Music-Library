import React, { useState } from "react";
import { addMusic } from "../utility/music-api";

function Playlist() {
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
      image:
        image ||
        "https://i.pinimg.com/564x/66/39/19/66391940e99ae6e58a0478b9c23f333d.jpg",
    };
    await addMusic(musicData);
    setTitle("");
    setArtist("");
    setGenre("");
    setImage("");
  };

  return (
    <div className="playlist">
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
            </div>

            <button type="submit">Add Music</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Playlist;
