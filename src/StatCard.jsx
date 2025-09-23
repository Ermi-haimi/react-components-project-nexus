import './StatCard.css'

function StatCard(probs) {
    return <div>
        <p>{probs.statName}</p>
        <p>{probs.stat}</p>
        <p>{probs.statDiscription}</p>
    </div>
}


export default StatCard;
