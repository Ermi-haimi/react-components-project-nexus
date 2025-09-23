import StatCard from './StatCard'

function StatCards () {
  return (
      <div>
        <StatCard statName="Total Tasks" stat="4" statDiscription="All tasks in the system"/>
        <StatCard statName="Active Projects" stat="3" statDiscription="Currently running projects"/>
        <StatCard statName="Team Members" stat="4" statDiscription="People in your team"/>
        <StatCard statName="Notifications" stat="3" statDiscription="Recent updates" />
      </div>
  )
}

export default StatCards