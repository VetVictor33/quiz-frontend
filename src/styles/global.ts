import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    position: relative;
    width:100%;
    height: 100%;
  }

  body{
    width: 100vw;
    height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.main}
  }

`

export default GlobalStyle;