import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: #ffffff;
    color: #212121;
  }
  button{
    cursor: pointer;
  }
  h1{
    font-weight: 500;
  }
`;