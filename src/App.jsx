import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Activity1 from './pages/Activity1.jsx'
import Activity2 from './pages/Activity2.jsx'
import Activity4 from './pages/Activity4.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    if (page === 'home') return <Home onNavigate={setPage} />
    if (page === 'activity1') return <Activity1 />
    if (page === 'activity2') return <Activity2 />
    if (page === 'activity4') return <Activity4 />
    return <Home onNavigate={setPage} />
  }

  return (
    <div className="app-shell">
      <Navbar current={page} onNavigate={setPage} />
      <main className="app-main">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
