import style from './Navbar.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={style.navbar}>
            <ul>
                <li><Nav.Link href="#presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#projects">Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Eder-TS'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/eder-ts/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar