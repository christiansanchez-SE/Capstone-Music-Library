import React from "react";
import { Routes, Route } from "react-router-dom";

import './styles/App.css';
import './styles/Homepage.css';
import './styles/Nav.css';
import './styles/Artists.css';
import './styles/allSongs.css';
import './styles/Playlist.css';
import './styles/ExpandLibrary.css';





import Homepage from "./pages/Homepage";
import AllSongs from "./pages/allSongs";
import Artists from "./pages/Artists"
import Playlist from "./pages/Playlist"
import ExpandLibrary from "./pages/ExpandLibrary"



import Navbar from "./components/Nav"


function App() {
  return (
    <div className="app">
      <Navbar />
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/AllSongs" element={<AllSongs/>}/>
        <Route path="/Artists" element={<Artists/>}/>
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/ExpandLibrary" element={<ExpandLibrary/>}/>
      </Routes>
    </div>
  );
}

export default App;