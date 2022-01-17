import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './elements.js';

import {GlobalStyles} from '../CircleButton/elements.js';
  
function Navbar() {
  return (
    <>
    <GlobalStyles />
      <Nav>
        <Bars />
        {/* <NavBtn>
          <NavBtnLink to='/'>Nghi Nguyen</NavBtnLink>
        </NavBtn> */}
          <NavLink textcolor= '#E4CC9C' fontSize= '32px' tabwidth= '200px' to='/'>
            nghi nguyen
          </NavLink>
        <NavMenu>
          <NavLink color= '#78A6EB' to='/about'>
            about
          </NavLink>
          <NavLink color= '#DA7272' to='/art'>
            art
          </NavLink>
          <NavLink color= '#F0D07D' to='/projects'>
            projects
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;