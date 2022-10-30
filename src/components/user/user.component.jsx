import { useState } from 'react'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import './user.style.scss'

const User = ({ info, id, goalQuantity }) => {

    const [userInfo, setUserInfo] = useState({}) 
    const [infoImg, setInfoImg] = useState('https://cdn-icons-png.flaticon.com/512/277/277964.png');
    const [openExtraInfo, setOpenExtraInfo] = useState('false')

    const openingAndClosing = () => {
        const darkBackground = document.querySelector('.bg');
        if (openExtraInfo == 'false') {
            setOpenExtraInfo('true')
            setInfoImg('https://cdn-icons-png.flaticon.com/512/753/753345.png')
            darkBackground.style.display = 'block';
        } else {
            setOpenExtraInfo('false')
            setInfoImg('https://cdn-icons-png.flaticon.com/512/277/277964.png')
            darkBackground.style.display = 'none';
        }
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${info}`)
            .then(response => response.json())
            .then(data => setUserInfo(data))
    }, [id])

    const GoalQuantity = () => {
        if (goalQuantity.goals) {
            return goalQuantity.goals.length;
        }
    }

    return (
        <div className="user">
            <div>
                <img src={ userInfo.avatar_url } alt="" />
                <div>
                    <p>{ userInfo.name }</p>
                    <a href={ userInfo.html_url } target="_blank">Check out { userInfo.name }'s GitHub</a>
                </div>
            </div>
            <div>
                <img src={infoImg} alt="" onClick={openingAndClosing} />
                <div className='userExtraInfo' data-extrainfo-toggle={openExtraInfo}>
                    <img src={userInfo.avatar_url} alt="" />
                    <p className='name'> { userInfo.name } </p>
                    <p className='bio'> { userInfo.bio } </p>
                    <div className='socialMedia'>
                        <a href={ userInfo.html_url } target="_blank"><GitHubIcon /></a>
                        { userInfo.twitter_username ? <a href={`https://twitter.com/${userInfo.twitter_username}`} target="_blank"><TwitterIcon /></a> : "" }
                    </div>
                </div>
            </div>
            <div className='bg'></div>
        </div>
    )
}

export default User