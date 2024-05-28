import React, { useState, useEffect } from "react";
import { addMusic, getMusic } from "../utility/music-api";

function Playlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [musicLibrary, setMusicLibrary] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToFavorites = (music) => {
    if (!favorites.some(favorite => favorite._id === music._id)) {
      setFavorites([...favorites, music]);
    }
  };

  const handleRemoveFromFavorites = (musicToRemove) => {
    setFavorites(favorites.filter(music => music._id !== musicToRemove._id));
  };

  const filteredMusic = musicLibrary.filter(music =>
    music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    music.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    music.genre.join(", ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="playlist">

      <div className="playlist-search-container">
        <input
          type="text"
          placeholder="Search Music"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="playlist-main-container">
        {filteredMusic.map((music, index) => (
          <div className="playlist-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <h2>{music.title}</h2>
            <img src={music.image} alt={music.image} className="playlist-musicPicture" />
            <p>Genre: {music.genre.join(", ")}</p>
            <button onClick={() => handleAddToFavorites(music)}>Add to Favorites</button>
          </div>
        ))}
      </div>

      <div className="playlist-favorites-container">
        <h2>Favorites</h2>
        {favorites.map((music, index) => (
          <div className="playlist-music-library" key={index}>
            <h2>Artist: {music.artist}</h2>
            <h2>{music.title}</h2>
            <img src={music.image} alt={music.image} className="playlist-musicPicture" />
            <p>Genre: {music.genre.join(", ")}</p>
            <button onClick={() => handleRemoveFromFavorites(music)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;