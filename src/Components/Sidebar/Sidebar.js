import './Sidebar.scss'
import Logo from '../../Assets/images/logo-s.png'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () =>{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
                
            </Link>
            <nav>
                <NavLink exact="true"  className="home" to= "/">
                    <FontAwesomeIcon icon={faHome} color='#FFFFFF'/>
                </NavLink>
                <NavLink exact="true" className="about-link" to= "/aboutme">
                    <FontAwesomeIcon icon={faUser} color='#FFFFFF'/>
                </NavLink>
                <NavLink exact="true" className="contact-me" to= "/contactme">
                    <FontAwesomeIcon icon={faEnvelope} color='#FFFFFF'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                    target='_blank'
                    rel= "noreferrer"
                    href='https://www.linkedin.com/in/marcos-antón-b18b66239/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#FFFFFF' />
                    </a>
                </li>
                <li>
                    <a
                    target='_blank'
                    rel= "noreferrer"
                    href='https://github.com/NovaAntonsito'>
                    <FontAwesomeIcon icon={faGithub} color='#FFFFFF' />
                    </a>
                </li>
            </ul>
        </div>
    )
}



export default Sidebar