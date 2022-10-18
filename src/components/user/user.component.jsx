import './user.style.scss'

const User = ({ info }) => {
    return (
        <div className="user">
            <img src={ info.profileImg } alt="" />
            <div>
                <p>{ info.name }</p>
                <a href={ info.github } target="_blank">Check out { info.name }'s GitHub</a>
            </div>
        </div>
    )
}

export default User