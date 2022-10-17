import './eachgoal.style.scss'

import Achieve from '../stepAchieve/stepAchieve.component'

const Goal = ({ goalInfo }) => {

    console.log(goalInfo)

    return (
        <div className='eachGoal'>
            { goalInfo.map(G => {
                return (
                    <div className={`${G.completed == true ? 'completed' : "notcompleted"}`}>
                        <h2>{ G.goal }</h2>
                        <Achieve stepsForAchieving={G.step_to_achieve_it} />
                        <p> Target Date: { G.target_date } </p>
                    </div>
                )
            }) }
        </div>
    )
}

export default Goal