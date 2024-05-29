import React from "react";
import { Link } from "react-router-dom";

// Importing data from fontawesome so the Icons could be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHouse, faGuitar, faHeart, faListUl, faMusic, faBars } from '@fortawesome/free-solid-svg-icons';


// Allows for fonts to be used
const elementOne = <FontAwesomeIcon icon={faHouse} />;
const elementTwo = <FontAwesomeIcon icon={faMusic} />;
const elementThree = <FontAwesomeIcon icon={faGuitar} />;
// const elementFour = <FontAwesomeIcon icon={faHeart} />;
const elementFive = <FontAwesomeIcon icon={faListUl} />;
const elementSix = <FontAwesomeIcon icon={faBook} />;
const elementSeven = <FontAwesomeIcon icon={faBars} />

function Nav() {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <FontAwesomeIcon icon={faBars} className="logo"/>
        <span className="navItemMenu">Menu</span>
      </div>
      <div className="navBar-Lib">
        <h4>Library</h4>
      </div>
      <ul className="navBar-linksContainer">
        <li className="navBar-indLinks">
          <Link to="/" className="nav-link"> <FontAwesomeIcon icon={faHouse} className="fas" /><span className="navItem">Home</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/AllSongs" className="nav-link"> <FontAwesomeIcon icon={faMusic} className="fas"/><span className="navItem">Browse Songs</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/Artists" className="nav-link"> <FontAwesomeIcon icon={faGuitar} className="fas" /><span className="navItem">Artists</span></Link>
        </li>
      </ul>
      <div className="navBar-myMusic">
        <h3>My Music</h3>
      </div>
      <ul className="navBar-linksContainer">
        <li className="navBar-indLinks">
          <Link to="/ExpandLibrary" className="nav-link"> <FontAwesomeIcon icon={faBook} className="fas"/><span className="navItem">Expand Library</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/PLaylist" className="nav-link"> <FontAwesomeIcon icon={faListUl} className="fas" /><span className="navItem">Playlist</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;