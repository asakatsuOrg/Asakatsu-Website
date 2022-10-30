import './header.style.scss'

import Button from '@mui/material/Button';
import { ReactComponent as HomeSVG } from '../../assets/Home SVG.svg'

import { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.homeText h1', {
            x: 0,
            opacity: 1, 
            duration: 1
        })
        .to('.homeText p', {
            x: 0,
            opacity: 1, 
            stagger: .2,
            duration: 1
        }, '-=.5')
        .to('.homeText .button', {
            x: 0,
            opacity: 1, 
            duration: .6
        }, '-=.5')
        .to('.headerSVG', {
            scale: 1,
            opacity: 1, 
            duration: .3
        })
    }, [])
    
    return (
        <header>
            <div className='homeText'>
                <h1>Asakatsu</h1>
                <p>A project where you can keep track of your goal's progress, and contribute to open source in the same time.</p>
                <p><a href="https://github.com/asakatsuOrg/Asakatsu-Website" target="_blank">AsaKatsu</a> is a Japanese term for waking up a little early to do something productive, in line with a goal. For example; read 4 books per month, do 100 days challenge, etc.</p>
                <p>In this project, everyone who will commit will have to do a thing or two every morning and log the progress here.</p>  
                <a href='https://github.com/asakatsuOrg/Asakatsu-Website' target="_blank"><Button className='button' variant="contained">Make your Goal</Button></a>
            </div>
            <HomeSVG className="headerSVG" />
        </header>
    )
}

export default Header