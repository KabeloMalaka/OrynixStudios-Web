import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home__lockup">
        <span className="home__mark" aria-hidden="true">
          O
        </span>
        <h1 className="home__logo">Orynix Studios</h1>
      </div>

      <div className="home__projects">
        <p className="home__projects-label">Our Projects</p>
        <Link to="/ham" className="home__project-card">
          <span className="home__project-icon" aria-hidden="true">
            ⏱️
          </span>
          <span className="home__project-info">
            <span className="home__project-name">Half A Minute</span>
            <span className="home__project-desc">
              A fast-paced party game of guessing prompts against the clock
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
