import Card from './Card'
import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'

function Projects(){
    return(
        <div className={styles.projects} id="projects">
            <h1>Projetos</h1>

            <Card/>
            <Card/>

            <ButtonB text='Ver repositório Completo' link='https://github.com/Eder-TS?tab=repositories'/>
        </div>
    )
}

export default Projects