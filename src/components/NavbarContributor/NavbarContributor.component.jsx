import './NavbarContributor.style.scss'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button';

import Contributors from '../../../Profile.json'

const NavbarContributor = ({ Hover, NotHover }) => {

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
            <nav data-toggle="false" onMouseEnter={Hover} onMouseLeave={NotHover} >
                <h1>Contributors</h1>
                <div>
                    { Contributors.map(C => {
                        return (
                            <div>
                                <Button className='button2'>
                                    <Link className='names' to={`/contributor/${C.name}`} > 
                                        <img src={`https://github.com/${C.githubUsername}.png`} alt="" />
                                        { C.name } 
                                        <span className='contributorNum'> { C.contributor } </span>
                                    </Link>
                                </Button>
                            </div>
                        )
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

export default NavbarContributor