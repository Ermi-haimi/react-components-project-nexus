import './RecentActivities.css'
import RecentActivity from './RecentActivity'

function RecentActivities() {
    
    return <section className='recent-activity-container'>
        <div className="recent-activity-inner-container">
            <h2>Recent Activity</h2>
            <RecentActivity who="Sarah Chen" what="updated" where="Homepage Design" time="30 minutes ago" />
            <hr className='hr'/>
            <RecentActivity who="Mike Johnson" what="commented on" where="Database Setup" time="1 hour ago" />
            <hr className='hr' />
            <RecentActivity who="Alex Rivera" what="completed" where="API Documentaion" time="2 hours ago" />
        </div>
        </section>
}

export default RecentActivities;