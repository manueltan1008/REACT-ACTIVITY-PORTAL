import { useState } from 'react'
import './Activities.css'

function Activity1() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    if (username.trim() === '' && password.trim() === '') {
      setMessage('Please enter username and password.')
      return
    }
    if (username === 'admin' && password === '12345') {
      setMessage('Login successful!')
      setLoggedIn(true)
    } else {
      setMessage('Invalid username or password.')
    }
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setUsername('')
    setPassword('')
    setMessage('')
  }

  return (
    <div className="activity-page">
      <div className="activity-card">
        <h1 className="activity-title">Login Authentication</h1>
        <p className="activity-subtitle">Activity 1</p>
        <hr className="activity-divider" />

        {!loggedIn && (
          <>
            <label className="field-label">Username</label>
            <input
              className="field-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="field-label">Password</label>
            <input
              type="password"
              className="field-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {message && <div className="message-box">{message}</div>}

            <button className="btn-block primary" onClick={handleLogin}>
              Login
            </button>

            <p className="legend-text">
              Sample credentials — Username: admin, Password: 12345
            </p>
          </>
        )}

        {loggedIn && (
          <>
            <div className="message-box">{message}</div>
            <h2 style={{ margin: '20px 0 8px' }}>Welcome, admin!</h2>
            <p style={{ color: '#64748b', marginBottom: 20 }}>
              You are now logged in.
            </p>
            <button className="btn-block secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Activity1