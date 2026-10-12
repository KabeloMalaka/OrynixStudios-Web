import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner" onClick={() => window.location.assign('/')}>
        <span className="navbar__mark" aria-hidden="true">
          O
        </span>
        <span className="navbar__logo">Orynix Studios</span>
      </div>
    </header>
  )
}

export default Navbar
