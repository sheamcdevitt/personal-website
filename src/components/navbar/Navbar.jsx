import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {logo} from './import'
import './navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // need to simplify the onlick event
  const Menu = () => (
    <> 
    <p><a href="#home">Home</a></p>
    <p><a href="#portfolio">Portfolio</a></p>
    <p><a href="#bookshelf">Bookshelf</a></p>
    <p><a href="#blog">Articles</a></p>
    <p><a href="#about">About</a></p> 
    </>
)

  return (
    <div className="ps__navbar">
      <div className="ps__navbar-links">
        <div className="ps__navbar-links_logo">
         <a href="#home"> <img src={logo} href="#home"/> </a>
        </div>
        <div className="ps__navbar-links_container">
          <Menu />
        </div>
      </div>
     
      <div className="ps__navbar-menu">
        {toggleMenu
          ? <RiCloseLine className="ps__navbar-menu-burger" color="#040c18" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className="ps__navbar-menu-burger" color="#040c18" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ps__navbar-menu_container scale-up-center">
          <div className="ps__navbar-menu_container-links" onClick={() => setToggleMenu(false)}>
           <Menu />
          </div>
          <div className="ps__navbar-menu_container-links-sign">
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



/*
const Menu = () => (
    <> 
    <p><a href="#home">Home</a></p>
    <p><a href="#portfolio">Portfolio</a></p>
    <p><a href="#bookshelf">Bookshelf</a></p>
    <p><a href="#blog">Articles</a></p>
    <p><a href="#about">About</a></p>
    </>
)
*/