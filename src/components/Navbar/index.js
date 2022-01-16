import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './elements.js';
  
function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavBtn>
          <NavBtnLink to='/'>Nghi Nguyen</NavBtnLink>
        </NavBtn>
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/art'>
            Art
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;