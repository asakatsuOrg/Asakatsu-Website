import './Navbar.style.scss'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='homeNavbar'>
            <Link to='/' className='logo'>
                <img src={Logo} alt="" />
                <h2>ASAKATSU</h2>
            </Link>
            <Link to='/contributor'><Button className='button' variant="contained">See Goals</Button></Link>
        </div>
    )
}

export default Navbar