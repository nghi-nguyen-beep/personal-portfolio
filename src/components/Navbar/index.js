import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './elements.js';
  
function Navbar() {
  return (
      <Nav>
        <Bars /> https://codesandbox.io/s/0hkkj?file=/src/components/Navbar.jsx
          {/* <NavLink textcolor= '#3E3D3A' fontSize= '32px' tabwidth= '200px' to='/'>
            nghi nguyen
          </NavLink> */}
        <NavMenu>
          <NavLink color= '#0A2463' to='/about'>
            about
          </NavLink>
          <NavLink color= '#AD2E24' to='/art'>
            art
          </NavLink>
          <NavLink color= '#F0A926' to='/projects'>
            projects
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;