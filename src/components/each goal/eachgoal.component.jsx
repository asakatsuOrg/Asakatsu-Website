import './eachgoal.style.scss'

// Icons
import DateRangeIcon from '@mui/icons-material/DateRange';

import Achieve from '../stepAchieve/stepAchieve.component'

const Goal = ({ goalInfo }) => {


    return (
        <div className='eachGoal'>
            { goalInfo.map(G => {
                return (
                    <div className={`${G.completed == true ? 'completed' : "notcompleted"}`}>
                        <div>
                            <h2 className={`${G.goal.length > 15 ? 'small' : 'big'}`} >{ G.goal }</h2>
                            <p className='date'> <DateRangeIcon sx={{ fontSize: 18 }} /> { G.target_date } </p>
                        </div>
                        <Achieve stepsForAchieving={G.step_to_achieve_it} completed={G.completed} />
                    </div>
                )
            }) }
        </div>
    )
}

export default Goal