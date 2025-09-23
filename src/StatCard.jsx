import './StatCard.css'

function StatCard(props) {
    return <div className='stat-card'>
        <p>{props.statName}</p>
        <p>{props.stat}</p>
        <p>{props.statDiscription}</p>
    </div>
}


export default StatCard;
