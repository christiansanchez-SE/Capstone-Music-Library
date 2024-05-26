import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHouse, faGuitar, faHeart, faListUl, faMusic } from '@fortawesome/free-solid-svg-icons';

const elementOne = <FontAwesomeIcon icon={faHouse} />;
const elementTwo = <FontAwesomeIcon icon={faMusic} />;
const elementThree = <FontAwesomeIcon icon={faGuitar} />;
const elementFour = <FontAwesomeIcon icon={faHeart} />;
const elementFive = <FontAwesomeIcon icon={faListUl} />;
const elementSix = <FontAwesomeIcon icon={faBook} />;

function Nav() {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <FontAwesomeIcon icon={faBook} className="logo"/>
        <span className="navItemMenu">Menu</span>
      </div>
      <div className="navBar-Lib">
        <h4>Library</h4>
      </div>
      <ul className="navBar-linksContainer">
        <li className="navBar-indLinks">
          <Link to="/"> <FontAwesomeIcon icon={faHouse} className="fas" /><span className="navItem">Home</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/AllSongs"> <FontAwesomeIcon icon={faMusic} className="fas"/><span className="navItem">Browse Songs</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/Artists"> <FontAwesomeIcon icon={faGuitar} className="fas" /><span className="navItem">Artists</span></Link>
        </li>
      </ul>
      <div className="navBar-myMusic">
        <h4>My Music</h4>
      </div>
      <ul className="navBar-linksContainer">
        <li className="navBar-indLinks">
          <Link to="/"> <FontAwesomeIcon icon={faHeart} className="fas"/><span className="navItem">Favorite Songs</span></Link>
        </li>
        <li className="navBar-indLinks">
          <Link to="/Playlist"> <FontAwesomeIcon icon={faListUl} className="fas" /><span className="navItem">Playlist</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;