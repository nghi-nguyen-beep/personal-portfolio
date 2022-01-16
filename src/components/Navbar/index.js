import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './elements.js';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
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
      <Outlet />
    </>
  );
};
  
export default Navbar;