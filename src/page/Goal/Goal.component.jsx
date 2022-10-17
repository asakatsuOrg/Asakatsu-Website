import { useParams } from 'react-router-dom'
import './Goal.style.scss'

import ProfileData from '../../context/Profile.json'
import Intro from '../../components/Intro/intro.component'
import User from '../../components/user/user.component'

const Profile = () => {

    const Project = 'Asakatsu'

    const { id } = useParams()
   
    const findingProfile = ProfileData.find(P => {
        return P.name == id;
    })

    return (
        <div className='goal'>
            { findingProfile ? <User info={ findingProfile } /> : <Intro projectName={Project} /> }
        </div>
    )
}


export default Profile