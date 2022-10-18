import './user.style.scss'

import { Skeleton } from '@mui/material'

const User = ({ info }) => {
    return (
        <div className="user">
            <div>
                <Skeleton className='skeleton' variant="circular" width={50} height={50} />
                <img src={ info.profileImg } alt="" />
            </div>
            <div>
                <p>{ info.name }</p>
                <a href={ info.github } target="_blank">Check out { info.name }'s GitHub</a>
            </div>
        </div>
    )
}

export default User