import './Home.css'

function Home({ onNavigate }) {
  return (
    <div className="home-wrap">
      <div className="home-hero">
        <span className="home-eyebrow">[ GROUP_04 ]</span>
        <h1 className="home-title">
          React Activity
          <br />
          Portal
        </h1>
        <p className="home-lede">
          A small set of interactive exercises covering state, validation,
          and conditional rendering — built one activity at a time.
        </p>

        <div className="home-actions">
          <button className="btn-primary" onClick={() => onNavigate('activity1')}>
            Open first activity
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="home-divider" />

      <div className="home-grid">
        <div className="home-card">
          <div className="home-card-top">
            <span className="home-tag">ACTIVITY</span>
          </div>
          <h3>Login Flow</h3>
          <p>Secure access and role-based states.</p>
          <button className="btn-open" onClick={() => onNavigate('activity1')}>
            Open activity
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home