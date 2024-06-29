import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'

function Presentation(){
    const [text, setText] = useState('')
    const toRotate = ['Eder TS!', 'Desenvolvedor Full Stack!']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 180
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let clock = setInterval(() => {
            toType()
        }, delta)
        return() => {clearInterval(clock)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText =  toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop + 1)
        }
    }

    return(
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1><strong>Olá, eu sou {text}</strong></h1>

            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. Como<br/>
                Desenvolvedor, eu tenho o compromisso de resolver<br/>
                problemas complexos e trazer resultados excepcionais para os<br/>
                negócios. Meus projetos estão ao seu alcance para comprovar e <br/>
                estou sempre em busca de novos desafios para superar.
            </p>


            <ButtonA text='Conecte-se comigo!!' link='https://github.com/Eder-TS'></ButtonA>
        </div>
    )
}

export default Presentation