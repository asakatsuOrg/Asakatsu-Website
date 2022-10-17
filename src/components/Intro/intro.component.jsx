import './intro.style.scss'

import Button from '@mui/material/Button';

const Intro = ({ projectName }) => {
    return (
        <div className='intro'>
            <h1 className='raleway'>Welcome to { projectName } </h1>
            <p>
                A project where you can keep track of your goal's progress, and contribute to open source in the same time. <br />
                AsaKatsu is a Japanese term for waking up a little early to do something productive, in line with a goal. For example; read 4 books per month, do 100 days challenge, etc.
            </p>
            <a href="https://github.com/asakatsuOrg/AsaKatsuProject" target="_blank"><Button className='button' variant="contained">See the Project</Button></a>
        </div>
    )
}

export default Intro