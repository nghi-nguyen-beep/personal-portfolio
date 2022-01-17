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
    color: white;
    font-size: 36px;
    height: 35vh;
    width: 35vh;
    border: none;
    font-family: 'Ramaraja';
`;
