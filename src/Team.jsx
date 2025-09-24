import './Team.css'
import Profile from './Profile'
import profilePic from './assets/images/professional-headshot.png';
import profilePic1 from './assets/images/professional-woman-designer.png';
import profilePic2 from './assets/images/professional-man-developer.png';
import profilePic3 from './assets/images/professional-person-writer.jpg';
import profilePic4 from './assets/images/professional-woman-developer.png';


function Team() {
    
    return <section className='team'>
        <Profile name="John Doe" job="Project Manager" email="john@example.com" src={profilePic} className="john" />

        <div className='members'>
            <h2>Team Members</h2>
        
        <Profile name="Sarah Chen" job="UI/UX Designer" email="john@example.com" src={profilePic1} className="erase" />
        <Profile name="Mike Johnson" job="Backend Developer" email="john@example.com" src={profilePic2} className="erase" />
        <Profile name="Alex Rivera" job="Technical Writer" email="john@example.com" src={profilePic3} className="erase" />
        <Profile name="Emma Davis" job="Frontend Developer" email="john@example.com" src={profilePic4} className="erase" />
   
        </div>
        
    </section>
}

export default Team;