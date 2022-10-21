import { useParams } from 'react-router-dom'
import './Goal.style.scss'
import Logo from '../../assets/Logo.png'

import ProfileData from '../../../Profile.json'
import Intro from '../../components/Intro/intro.component'
import User from '../../components/user/user.component'
import Goal from '../../components/each goal/eachgoal.component'
import NoGoal from '../../components/No Goal/nogoal.component'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
                    <User info={ findingProfile.githubUsername } id={id} /> 
                    { findingProfile.goals ? 
                        <div>
                            <h1>Goal</h1>
                            <Goal goalInfo={findingProfile.goals} />
                        </div>
                    : <NoGoal /> }
                </div>
            : <Intro projectName={Project} /> }
            <Link to="/" className='logo'><img width="100%" src={Logo} alt="" /></Link>
            <div className='bg2'></div>
        </div>
    )
}


export default Profile