import React from "react"
import { Helmet } from "react-helmet"

function Home({ onNavigate = () => {} }) {
  return (
    <section className="home-simple">
      <Helmet>
        <title>Keshav — Home</title>
      </Helmet>
      <div className="home-content">
        <h1 className="name">Keshav Badrinath</h1>
        <p className="role">
          Computer Science at the University of Illinois, Urbana-Champaign
        </p>
        <p className="blurb">
          I'm broadly interested in problems related to robotics, AI, and
          computer vision, but enjoy building anything and everything that makes
          life easier. I currently conduct world model and robot manipulation
          policy research at UIUC under PhD student Shivansh Patel. I'm a member
          of SIGRobotics @ UIUC where I build cool projects like a matcha making
          robot.
        </p>

        <div className="links">
          <button
            className={`nav-link`}
            onClick={() => onNavigate("papershelf")}
          >
            Papershelf
          </button>
          <a
            className="nav-link"
            href="https://github.com/Aqtion"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="nav-link"
            href="https://linkedin.com/in/keshav-badrinath"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="nav-link"
            href="https://x.com/keshavbadrinath"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a className="nav-link" href="mailto:keshavbadrinath06@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
