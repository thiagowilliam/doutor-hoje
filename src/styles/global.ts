import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  body {
    -webkit-font-smoothing: antialiased !important;
    background: var(--color-background);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }
  button{
    cursor: pointer;
  }
  body, input, button, textarea{
    font-weight: 500;
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: var(--color-text-base);
  }

  h1,h2,h3,h4,h5,strong{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  body, html, #root{
    height: 100vh;
  }


  :root {
  --color-background: #F0F0F7;
  --color-primary: #0967ff;
  --color-secundary: #133460 ;
  --color-title-primary: #404040 ;
  --color-text-base: #404040;
  --color-text-in-blue: #F0F0F7;
  --color-button-background: #0967ff;
  --color-button-text: #F0F0F7;
  --color-text-placeholder: #a8a8b3;
  --color-white: #fff;
  --color-strong-black: #222222;
  --color-weak-black: #2b2b2b;
  font-size: 60%;
}

@media(min-width: 700px){
  :root{
    font-size: 62.5%;
  }
}
`;
export default GlobalStyles;
