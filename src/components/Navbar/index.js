import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './elements.js';
import { ReactComponent as HumanArms } from '../../assets/projects/human-arms.svg';
  
function Navbar() {
  return (
      <Nav>
        <Bars />
          {/* <NavLink textcolor= '#3E3D3A' fontSize= '32px' tabwidth= '200px' to='/'>
            nghi nguyen
          </NavLink> */}
        <NavMenu>
          <NavLink color= '#bd3c81' to='/about'>
            <HumanArms aria-hidden="true" focusable="false" />
            <span>about</span>
          </NavLink>
          <NavLink color= '#51206b' to='/projects'>
            <HumanArms aria-hidden="true" focusable="false" />
            <span>projects</span>
          </NavLink>
          <NavLink color= '#203aae' to='/art'>
            <HumanArms aria-hidden="true" focusable="false" />
            <span>art</span>
          </NavLink>
          <NavLink color= '#cc5009' to='/fixations'>
            <HumanArms aria-hidden="true" focusable="false" />
            <span>fixations</span>
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;