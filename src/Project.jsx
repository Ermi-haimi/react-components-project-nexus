import './project.css'

function Project(probs) {
    return <div>
        <p>{probs.projectName}</p>
        <p>{probs.projectDiscription}</p>
        <div>
            <div>
            <button>ppl</button>
                {probs.membersNum} members
            </div>
            <div>
                <button>calan</button>
                {probs.date}
            </div>
        </div>
    </div>
}

export default Project;