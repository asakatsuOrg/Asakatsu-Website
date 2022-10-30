import './intro.style.scss'

import Button from '@mui/material/Button';
import { gsap } from 'gsap'
import { useEffect } from 'react';

const Intro = ({ projectName }) => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('.intro h1', {
            x: 0,
            opacity: 1,
            duration: 1
        })
        .to('.intro p', {
            x: 0,
            opacity: 1,
            duration: 1
        }, '-=.5')
        .to('.intro a', {
            x: 0,
            opacity: 1,
            duration: 1
        }, '-=.6')
    })


    return (
        <div className='intro'>
            <h1 className='raleway'>Welcome to { projectName } </h1>
            <p>
                A project where you can keep track of your goal's progress, and contribute to open source in the same time. <br />
                AsaKatsu is a Japanese term for waking up a little early to do something productive, in line with a goal. For example; read 4 books per month, do 100 days challenge, etc.
            </p>
            <a href="https://github.com/asakatsuOrg/Asakatsu-Website" target="_blank"><Button className='button' variant="contained">See the Project</Button></a>
        </div>
    )
}

export default Intro