import './Notifications.css'
import Notification from './Notification'

function Notifications() {
    
    return <section className='notification-container'>
        <h2>Notifications</h2>
        <Notification notificationName="Task Completed"  notificationDiscription="Documentation has been finished by Alex Rivera" time="2 hours ago"/>
        <Notification notificationName="Deadline Approaching"  notificationDiscription="Homepage design is due in 3 days" time="4 hours ago"/>
        <Notification notificationName="New Team Member"  notificationDiscription="Emma Davis joined the project" time="1 day ago"/>
    </section>
}

export default Notifications;