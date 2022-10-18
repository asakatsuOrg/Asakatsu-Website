import './nogoal.style.scss'

import { ReactComponent as EmptyGoal } from '../../assets/No_goal.svg'; 

const NoGoal = () => {
    return (
        <div className="noGoal">
            <h1 className='raleway'>Empty</h1>
            <EmptyGoal />
        </div>
    )
}

export default NoGoal