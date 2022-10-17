import './stepAchieve.style.scss'

const Achieve = ({ stepsForAchieving }) => {

    console.log(stepsForAchieving)

    return (
        <ul className='achieve'>
            { stepsForAchieving.map(step => {
                return (
                    <li>{ step }</li>
                )
            }) }
        </ul>
    )
}

export default Achieve