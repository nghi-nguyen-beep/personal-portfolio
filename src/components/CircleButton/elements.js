import styled from 'styled-components';
import {createGlobalStyle} from "styled-components"
import Ramaraja from "../../pages/includes/fonts/Ramaraja/Ramaraja.woff";


export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Ramaraja;
    src: url(${Ramaraja}) format('woff');
  }
`;

export const Button = styled.button`
    border-radius: 100%;
    background-color: ${props => props.color ? props.color : "black"};
    margin: 1em;
    color: white;
    font-size: 36px;
    height: 18vw;
    width: 18vw;
    border: none;
    font-family: 'Ramaraja';
    transition: transform 250ms;
    &:hover {
      cursor: pointer;
      transform: translateY(-30px);
    }
    @media screen and (max-width: 896px) {
      transition: 200ms;
      font-size: 1.25em;
    }
`;
