import React from "react"

function Navbar({ activeTab = "home", onTabChange = () => {} }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="site-title">Keshav</div>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "home" ? "active" : ""}`}
            onClick={() => onTabChange("home")}
            aria-current={activeTab === "home" ? "page" : undefined}
          >
            Home
          </button>
          <button
            className={`tab ${activeTab === "papershelf" ? "active" : ""}`}
            onClick={() => onTabChange("papershelf")}
            aria-current={activeTab === "papershelf" ? "page" : undefined}
          >
            Papershelf
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
