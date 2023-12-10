import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./contexts"
import { Router } from "./Router"

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
