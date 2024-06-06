import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1><strong>Olá, eu sou Eder TS</strong></h1>

            <p>
            Sou um apaixonado por tecnologia e soluções inovadoras.Como<br/>
            Product Manager, eu tenho o compromisso de resolver<br/>
            problemascomplexos e trazer resultados excepcionais para os<br/>
            negócios.Meus projetos já geraram milhões de reais em receita<br/>
            anual estou sempre em busca de novos desafios para superar.
            </p>


            <ButtonA text='Conecte-se comigo!!' link='https://github.com/Eder-TS'></ButtonA>
        </div>
    )
}

export default Presentation