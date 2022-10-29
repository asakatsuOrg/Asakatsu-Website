import './Home.style.scss'
import Navbar from '../../components/HomeNavbar/Navbar.component'
import Header from '../../components/header/header.component';
import Rule from '../../components/rule/rule.component.';
import Contributor from '../../components/contributor/contributor.component';
import Background from '../../components/background/background.component';


import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <Rule />
        </div>
    )
}

export default Home