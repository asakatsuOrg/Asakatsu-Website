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
import { motion as m } from 'framer-motion'

const Profile = () => {

    const Project = 'Asakatsu'

    const { id } = useParams()
   
    const findingProfile = ProfileData.find(P => {
        return P.name == id;
    })

    // const GoalQuantity = () => {
    //     if (findingProfile.goals) {
    //         return findingProfile.goals.length;
    //     }
    // }


    return (
        <m.div className='goal' exit={{opacity: 0}}>
            { findingProfile ? 
                <div className='goalSection'>
                    <User info={ findingProfile.githubUsername } goalQuantity={findingProfile} id={id} /> 
                    { findingProfile.goals ? 
                        <div>
                            <h1>Goal</h1>
                            <Goal goalInfo={findingProfile.goals} />
                            {/* <GoalQuantity /> */}
                        </div>
                    : <NoGoal /> }
                </div>
            : <Intro projectName={Project} /> }
            <Link to="/" className='logo'><img width="100%" src={Logo} alt="" /></Link>
            <div className='bg2'></div>
        </m.div>
    )
}


export default Profile