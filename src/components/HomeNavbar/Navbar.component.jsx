import './Navbar.style.scss'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MaterialUISwitch } from '../light and dark/lightDark'
import useLocalStorage from '../../hooks/useLocalStorage'

import Logo from '../../assets/Logo.png'

const Navbar = ({ colorChanging, defaultTheme }) => {

    return (
        <div className='homeNavbar'>
            <Link to='/' className='logo'>
                <img src={Logo} alt="" />
                <h2>ASAKATSU</h2>
            </Link>
            <div>
                <MaterialUISwitch onClick={colorChanging} checked={defaultTheme} />
                <Link to='/contributor'><Button className='button' variant="contained">See Goals</Button></Link>
            </div>
        </div>
    )
}

export default Navbar