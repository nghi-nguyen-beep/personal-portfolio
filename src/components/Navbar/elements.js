import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  height: 85px;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
  position: fixed; 
  top: -3em;
  left: calc(50vw - 210px);
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: ${props => props.textcolor ? props.textcolor : 'white'};
  background-color: ${props => props.color ? props.color : 'none'};
  text-align: center;
  font-size: ${props => props.fontSize ? props.fontSize : '1.35em'};
  width: ${props => props.tabwidth ? props.tabwidth : '90px'};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
  padding: 0em 0.7em 1em 0.7em;
  border-radius: 0 0 5rem 5rem;
  height: 5em;
  cursor: pointer;
  transition: transform 250ms;
  &:hover {
    cursor: pointer;
    transform: translateY(1.2em);
    filter: brightness(120%);
  }
  &.active {
    color: white;
    filter: brightness(120%);
    transform: translateY(1.2em);
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 896px) {
    display: block;
    position: absolute;
    top: 2.5em;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-evenly;
  /* Second Nav */
  margin-right: 24px;
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 896px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: Ramaraja;
  text-align: center;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;