import React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Homepage from "./pages/Homepage";
import AllSongs from "./pages/AllSongs";
import Navbar from "./components/Nav"

function App() {
  return (
    <div className="app">
      <Navbar />
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/AllSongs" element={<AllSongs/>}/>
      </Routes>
    </div>
  );
}

export default App;