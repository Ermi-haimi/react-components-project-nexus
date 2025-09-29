import './GridCon.css'
import StatCards from './StatCards.jsx'
import Projects from './Projects.jsx'
import RecentTasks from './RecentTasks.jsx'
import Team from './Team.jsx'
import Notifications from './Notifications.jsx'
import RecentActivities from './RecentActivities.jsx'


function GridCon() {
    
    return <div className="grid-container">
        <StatCards/>
    <Projects />
    <RecentTasks />
    <Team />
    <Notifications />
    <RecentActivities />
    </div>
}

export default GridCon;