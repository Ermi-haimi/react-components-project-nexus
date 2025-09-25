import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import StatCards from './StatCards.jsx'
import Projects from './Projects.jsx'
import RecentTasks from './RecentTasks.jsx'
import Team from './Team.jsx'
import Notifications from './Notifications.jsx'
import RecentActivities from './RecentActivities.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <StatCards/>
    <Projects />
    <RecentTasks />
    <Team />
    <Notifications />
    <RecentActivities />
  </StrictMode>,
)
