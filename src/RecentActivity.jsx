import './RecentActivity.css'

function RecentActivity(props) {

    return <div className='activity'>
        <p>{props.who} <span>{props.what}</span> <span>{props.where}</span></p>
        <p>{props.time}</p>
    </div>
    
}

export default RecentActivity;