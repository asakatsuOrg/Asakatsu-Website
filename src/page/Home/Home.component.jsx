import './Home.style.scss'
import Navbar from '../../components/HomeNavbar/Navbar.component'
import Header from '../../components/header/header.component';
import Role from '../../components/role/role.component.';


import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <Role />
        </div>
    )
}

export default Home