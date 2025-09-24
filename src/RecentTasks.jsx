import './RecentTasks.css'

import RecentTask from "./RecentTask";

function RecentTasks() {
    
    return <section className="recent-task-container">
        <h2>Recent Tasks</h2>
        <RecentTask taskName="Design Homepage" taskDiscription="Create wireframes and mockups for the new homepage layout" memberName="Sarah Chen" date="1/15/2024" />
        <RecentTask taskName="Setup Database" taskDiscription="Configure PostgreSQL database and create initial schemas" memberName="Mike Johnson" date="1/10/2024" />
        <RecentTask taskName="Write Documentation" taskDiscription="Document API endpoints and component usage" memberName="Alex Rivera" date="1/10/2024" />
        <RecentTask taskName="Implement Authentication" taskDiscription="Add user login and registration functionality" memberName="Emma Davis" date="1/25/2024" />
    </section>
}

export default RecentTasks;