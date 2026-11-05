import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './elements.js';
import { ReactComponent as Sparkles } from '../../assets/projects/sparkles.svg';
  
function Navbar() {
  return (
      <Nav>
        <Bars />
          {/* <NavLink textcolor= '#3E3D3A' fontSize= '32px' tabwidth= '200px' to='/'>
            nghi nguyen
          </NavLink> */}
        <NavMenu>
          <NavLink color= '#0e68bd' to='/about'>
            <Sparkles aria-hidden="true" focusable="false" />
            <span>about</span>
          </NavLink>
          <NavLink color= '#0e68bd' to='/art'>
            <Sparkles aria-hidden="true" focusable="false" />
            <span>art</span>
          </NavLink>
          <NavLink color= '#0e68bd' to='/projects'>
            <Sparkles aria-hidden="true" focusable="false" />
            <span>projects</span>
          </NavLink>
          <NavLink color= '#0e68bd' to='/fixations'>
            <Sparkles aria-hidden="true" focusable="false" />
            <span>fixations</span>
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;