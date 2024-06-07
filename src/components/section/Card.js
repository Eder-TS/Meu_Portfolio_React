import ButtonB from '../elements/ButtonB'
import styles from './Card.module.css'

function Card({site, img, title, tech, description, repo}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt=''/>
            </a>

            <section>
                <h3>{title}</h3>

                <p><strong>Tecnologias:</strong> {tech}</p>

                <p>{description}</p>

                <ButtonB text='Acesse o repositório' link={repo}/>
            </section> 
        </div>
    )
}
export default Card