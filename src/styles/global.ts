import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Almendra&family=Poppins:wght@100;200;400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Almendra';
    border: none;
    outline: none;
}

button{
    cursor: pointer;
}

border-style, #root{
    min-height: 100vh;
}

`;