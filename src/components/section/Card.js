import dncweather from '../../images/projects/dncweather.png'
import landingpagednc from '../../images/projects/landingpagednc.png'
import ButtonB from '../elements/ButtonB'
import styles from './Card.module.css'

function Card(){
    return(
        <div className={styles.card}>
            <img src={dncweather} alt={'Página de clima'}/>

            <div>
                <h3>Projeto Clima e Logradouro</h3>

                <p>Tecnologias: HTML, CSS, JavaScript</p>
                <p>Projeto desenvolvido para uso interno de uma empresa onde os 
                    funionários podem pesquisar um logradouro a partir de um CEP 
                    e a tempretaura local a partir das coordenadas dadas.
                </p>

                <ButtonB text='Acesse o repositório'/>
            </div> 
        </div>
    )
}
export default Card