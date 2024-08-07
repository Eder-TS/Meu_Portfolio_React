import ButtonB from '../elements/ButtonB'
import styles from './Card.module.css'
import { useState } from 'react'

function Card({site, img, title, tech, description, repo}){
    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div className={styles.card} onMouseLeave={InfoOff}>
            <a href={site} onMouseEnter={InfoOn}>
                <img src={img} alt=''/>
            </a>

            {info === true &&(
                <section>
                    <h3>{title}</h3>

                    <p><strong>Tecnologias:</strong> {tech}</p>

                    <p>{description}</p>

                    <ButtonB text='Acesse o repositório' link={repo}/>
                </section>
            )}

        </div>
    )
}
export default Card