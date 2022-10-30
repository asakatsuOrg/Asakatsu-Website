import './stepAchieve.style.scss'

const Achieve = ({ stepsForAchieving, completed }) => {

    const Achieving = () => {
        stepsForAchieving.map(step => {
            return (
                <li>{ step }</li>
            )
        }) 
    }

    return (
        <ul className={`achieve ${completed == true ? 'notCompleted' : '' }`}>
            {stepsForAchieving.map(step => {
                return (
                    <li>{ step }</li>
                )
            }) }
        </ul>
    )
}

export default Achieve