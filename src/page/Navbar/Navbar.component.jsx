import './Navbar.style.scss'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

import Contributors from '../../context/Profile.json'

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [ navbarIcon, setNavbarIcon ] = useState('https://cdn-icons-png.flaticon.com/512/992/992482.png')

    const openingNavbar = () => {
        const nav = document.querySelector('nav');
        const openingNavbar = document.querySelector('.openNavbar');
        const navAttribute = nav.getAttribute('data-toggle');

        if (navAttribute == 'false') {
            nav.setAttribute('data-toggle', 'true');
            openingNavbar.style.transform = "translateX(200px) rotate(45deg)";
            
        } else {
            nav.setAttribute('data-toggle', 'false');
            openingNavbar.style.transform = "translateX(0px) rotate(0deg)";
        }
    }

    return (
        <Fragment>
            <nav data-toggle="false">
                <h1>Contributors</h1>
                <div>
                    { Contributors.map(C => {
                        return <Link className='names' to={`/${C.name}`} > { C.name } </Link>
                    }) }
                </div>
            </nav>
            <div className='openNavbar' onClick={openingNavbar}>
                {/* { navbarIcon } */}
                <img width='30px' src={navbarIcon} alt="" />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar