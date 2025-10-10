import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// Navbar removed per user request (we'll render inline links instead)
import Home from "./components/Home"
import Papershelf from "./components/Papershelf"
import Footer from "./components/Footer"
import reportWebVitals from "./reportWebVitals"

function App() {
  const [tab, setTab] = useState("home")

  return (
    <div className="app-root">
      <main>
        {tab === "home" && <Home onNavigate={setTab} />}
        {tab === "papershelf" && <Papershelf />}
      </main>

      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
