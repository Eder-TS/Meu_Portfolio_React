
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import style from './Footer.module.css'
function Footer(){
    return(
        <div className={style.footer}>
            <ul>
                <li><a href='https://www.instagram.com/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Eder-TS'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/eder-ts/'><FaLinkedin size={30}/></a></li>
            </ul>

            <p className={style.email}>steder20@yahoo.com.br</p>

            <p>Eder TS © 2024</p>
        </div>
    )
}

export default Footer