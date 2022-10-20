import './header.style.scss'

import Button from '@mui/material/Button';
import { ReactComponent as HomeSVG } from '../../assets/Home SVG.svg'


const Header = () => {
    return (
        <header>
            <div className='homeText'>
                <h1>ASAKATSU</h1>
                <p>A project where you can keep track of your goal's progress, and contribute to open source in the same time.</p>
                <p><a href="#">AsaKatsu</a> is a Japanese term for waking up a little early to do something productive, in line with a goal. For example; read 4 books per month, do 100 days challenge, etc.</p>
                <p>In this project, everyone who will commit will have to do a thing or two every morning and log the progress here.</p>  
                <a href='https://github.com/asakatsuOrg/AsaKatsuProject' target="_blank"><Button className='button' variant="contained">Make your Goal</Button></a>
            </div>
            <HomeSVG />
        </header>
    )
}

export default Header