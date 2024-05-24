import React from "react";
import { Routes, Route } from "react-router-dom";

import './styles/App.css';
import './styles/Homepage.css';
import './styles/Nav.css';
import './styles/Artists.css';


import Homepage from "./pages/Homepage";
import AllSongs from "./pages/AllSongs";
import Artists from "./pages/Artists"

import Navbar from "./components/Nav"


function App() {
  return (
    <div className="app">
      <Navbar />
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/AllSongs" element={<AllSongs/>}/>
        <Route path="/Artists" element={<Artists/>}/>
      </Routes>
    </div>
  );
}

export default App;