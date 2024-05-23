import { useState, useEffect } from "react";
import './styles/App.css';
import {getMusic} from "./utility/music-api";

function App() {
  const [musicLibrary, setMusicLibrary] = useState([]);

  useEffect(() => {
    getMusic(setMusicLibrary);
  }, []);

  return (
    <div className="app">
      <h1>Music Library</h1>
      <ul>
        {musicLibrary.map((music, index) => (
          <li key={index}>
            <h2>{music.title}</h2>
            <p>Artist: {music.artist}</p>
            <p>Genre: {music.genre.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;