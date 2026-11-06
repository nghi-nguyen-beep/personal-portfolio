import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  position: fixed; 
  top: 0.5rem;
  left: 0;
  @media screen and (max-width: 896px) {
    height: auto;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: ${props => props.color || '#EAC8CE'};
  text-align: center;
  font-size: ${props => props.fontSize || '0.875rem'};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-decoration: none;
  width: clamp(5rem, 12vw, 8rem);
  padding: 0.5rem;
  cursor: pointer;
  & > svg {
    display: block;
    width: clamp(2.5rem, 5vw, 4rem);
    height: clamp(2.5rem, 5vw, 4rem);
  }
  & > svg .arms-up {
    display: none;
  }
  &.active > svg .arms-down {
    display: none;
  }
  &.active > svg .arms-up {
    display: initial;
  }
  & > span {
    color: inherit;
  }
  &:hover {
    filter: brightness(120%);
  }
  &.active {
    filter: brightness(120%);
  }
  @media screen and (max-width: 896px) {
    flex: 1;
    width: auto;
    font-size: clamp(0.75rem, 3vw, 0.875rem);
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 896px) {
    display: none;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  width: min(100%, 600px);
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 896px) {
    width: 100%;
    justify-content: center;
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