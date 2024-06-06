import javascript from '../../images/skills/javascript.svg'
import react from '../../images/skills/react.svg'
import figma from '../../images/skills/figma.svg'
import java from '../../images/skills/java.svg'
import styles from './Skills.module.css'

function Skills(){
    return(
        <div className={styles.skills} id="skills">
            <h1>Habilidades</h1>

            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img src={javascript} alt='javascript'/>

                <img src={react} alt='react'/>

                <img src={figma} alt='figma'/>

                <img src={java} alt='java'/>
            </div>
        </div>
    )
}

export default Skills