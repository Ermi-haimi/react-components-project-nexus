import './Profile.css'

function Profile(props) {
    
    return <div className='profile'>
        <div className='person'>
            <div className='image'><img src={props.src} alt="profile picture" /></div>
            <div className='person-discription'>
                <p>{props.name}</p>
                <p>{ props.job}</p>
            </div>
           
        </div>
 <div className={props.className}>{props.email}</div>
    </div>
}

export default Profile;