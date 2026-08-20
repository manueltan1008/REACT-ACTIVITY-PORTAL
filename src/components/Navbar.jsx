import './Navbar.css'

function Navbar({ current, onNavigate }) {
  return (
    <header className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('home')}>
        <div className="navbar-logo">R</div>
        <span className="navbar-title">React Activity Portal</span>
      </div>

      <nav className="navbar-links">
        <button
          className={current === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('home')}
        >
          <span className="nav-dot" />
          Home
        </button>

        <button
          className={current === 'activity1' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('activity1')}
        >
          <span className="nav-dot" />
          Activity 1
        </button>
      </nav>
    </header>
  )
}

export default Navbar