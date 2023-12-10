import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./contexts"
import { Router } from "./Router"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import GlobalStyle from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
