import { useState } from 'react'
import './user.style.scss'

const User = ({ info }) => {

    const [infoImg, setInfoImg] = useState('https://cdn-icons-png.flaticon.com/512/665/665049.png');
    const [openExtraInfo, setOpenExtraInfo] = useState('false')

    const openingAndClosing = () => {
        const darkBackground = document.querySelector('.bg');
        if (openExtraInfo == 'false') {
            setOpenExtraInfo('true')
            setInfoImg('https://cdn-icons-png.flaticon.com/512/753/753345.png')
            darkBackground.style.display = 'block';
        } else {
            setOpenExtraInfo('false')
            setInfoImg('https://cdn-icons-png.flaticon.com/512/665/665049.png')
            darkBackground.style.display = 'none';
        }
    }

    return (
        <div className="user">
            <div>
                <img src={ info.avatar_url } alt="" />
                <div>
                    <p>{ info.name }</p>
                    <a href={ info.html_url } target="_blank">Check out { info.name }'s GitHub</a>
                </div>
            </div>
            <div>
                <img src={infoImg} alt="" onClick={openingAndClosing} />
                <div className='userExtraInfo' data-extrainfo-toggle={openExtraInfo}>
                    <img src={info.avatar_url} alt="" />
                    <p className='name'> { info.name } </p>
                    <p className='bio'> { info.bio } </p>
                </div>
            </div>
            <div className='bg'></div>
        </div>
    )
}

export default User