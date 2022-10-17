import './Navbar.style.scss'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import Contributors from '../../context/Profile.json'

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <h1>Contributors</h1>
                <div>
                    { Contributors.map(C => {
                        return <Link className='names' to={`/${C.name}`}> { C.name } </Link>
                    }) }
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navbar