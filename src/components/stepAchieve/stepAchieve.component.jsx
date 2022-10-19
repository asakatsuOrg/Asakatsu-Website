import './stepAchieve.style.scss'

const Achieve = ({ stepsForAchieving }) => {

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