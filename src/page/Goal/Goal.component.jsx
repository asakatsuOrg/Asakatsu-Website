import { useParams } from 'react-router-dom'
import './Goal.style.scss'

import ProfileData from '../../../Profile.json'
import Intro from '../../components/Intro/intro.component'
import User from '../../components/user/user.component'
import Goal from '../../components/each goal/eachgoal.component'
import NoGoal from '../../components/No Goal/nogoal.component'

const Profile = () => {

    const Project = 'Asakatsu'

    const { id } = useParams()
   
    const findingProfile = ProfileData.find(P => {
        return P.name == id;
    })

    return (
        <div className='goal'>
            { findingProfile ? 
                <div className='goalSection'>
                    <User info={ findingProfile } /> 
                    { findingProfile.goals ? 
                        <div>
                            <h1>Goal</h1>
                            <Goal goalInfo={findingProfile.goals} />
                        </div>
                    : <NoGoal /> }
                </div>
            : <Intro projectName={Project} /> }
            
        </div>
    )
}


export default Profile