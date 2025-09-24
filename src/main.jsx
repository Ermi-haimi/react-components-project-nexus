import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import StatCards from './StatCards.jsx'
import Projects from './Projects.jsx'
import RecentTasks from './RecentTasks.jsx'
import Profile from './Profile.jsx'
import profilePic from './assets/images/professional-headshot.png';
import Team from './Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <StatCards/>
    <Projects />
    <RecentTasks />
    <Profile name="John Doe" job="Project Manager" email="john@example.com" src={profilePic} className="john" />
    <Team />
  </StrictMode>,
)
