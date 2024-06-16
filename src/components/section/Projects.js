import Card from './Card'
import dncweather from '../../images/projects/dncweather.png'
import lpdnc from '../../images/projects/landingpagednc.png'
import bootcamp from '../../images/projects/bootcamp.png'
import bank from '../../images/projects/bank.png'
import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'

function Projects(){
    return(
        <div className={styles.projects} id="projects">
            <h1>Projetos</h1>

            <Card
                site="https://edertsdncweather.netlify.app/"
                img={dncweather} 
                title='Clima e Logradouro'
                tech='HTML, CSS, JavaScript' 
                description='Projeto desenvolvido para uso interno de uma empresa onde os 
                funionários podem pesquisar um logradouro a partir de um CEP 
                e a tempretaura local a partir das coordenadas dadas.'
                repo="https://github.com/Eder-TS/Desafio2_DncWeather"
            />
            
            <Card
                site="https://dapper-pothos-7da56a.netlify.app"
                img={lpdnc} 
                title='Landing Page'
                tech='HTML, CSS, JavaScript' 
                description='Página para chamada de novos alunos com formulário para contato.'
                repo="https://github.com/Eder-TS/PROJETO-LANDINGPAGE"
            />

            <Card
                site="https://inscricaobootcampdnc.netlify.app/"
                img={bootcamp} 
                title='Página de inscrição para evento'
                tech='HTML, CSS' 
                description='Página para inscrições de alunos interessados em evento de tecnologia.'
                repo="https://github.com/Eder-TS/Bootcamp-DNC"
            />

            <Card
                site="https://dnc-bank.netlify.app/"
                img={bank} 
                title='Página de banco'
                tech='HTML, CSS' 
                description='Página inicial de um banco fictício.'
                repo="https://github.com/Eder-TS/DNC-Bank"
            />

            <ButtonB text='Ver repositório Completo' link='https://github.com/Eder-TS?tab=repositories'/>
        </div>
    )
}

export default Projects