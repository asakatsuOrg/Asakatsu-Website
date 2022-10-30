import './Home.style.scss'
import Navbar from '../../components/HomeNavbar/Navbar.component'
import Header from '../../components/header/header.component';
import Rule from '../../components/rule/rule.component.';
import Contributor from '../../components/contributor/contributor.component';
import Background from '../../components/background/background.component';


import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const Home = ({ colorToggling, darkMode }) => {
    return (
        <m.div className='home' exit={{opacity: 0}}>
            <Navbar colorChanging={colorToggling} defaultTheme={darkMode}  />
            <Header />
            <Rule />
        </m.div>
    )
}

export default Home