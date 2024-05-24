import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='navBar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AllSongs">Browse Songs</Link></li>
            <li><Link to="/Artists">Artists</Link></li>
        </ul>
    </div>
  )
}

export default Nav