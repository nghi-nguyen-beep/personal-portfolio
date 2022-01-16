import styled from 'styled-components';
  
export const Button = styled.button`
    border-radius: 100%;
    background-color: ${props => props.color ? props.color : "white"};
    color: white;
    font-size: 36px;
    height: 350px;
    width: 350px;
    border: none;
`;
