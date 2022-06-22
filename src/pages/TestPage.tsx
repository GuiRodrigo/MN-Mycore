import { Test } from "../components/Test"
import { Footer } from "../components/footer"

import '../styles/contend.scss'
import '../styles/Footer.scss'

export function TestPage() {


    return (
        <div id="container" >
            <div id="pageContent">
                < Test />
                <div id="textContent">
                    <h1> Bem-Vindo ao MyCore - Wiki </h1>
                    <strong>
                        Um site de ajuda ao MyCore que foi desenvolvido para orientar no uso e tirar duvidas de navegação em seus módulos componentes
                    </strong>
                    <br />
                    <strong>
                        O site foi desenvolvido contemplando todas as funcionalidades decada módulo e  cada tela dos seus respectivos módulos, sendo extremamente útil como fonte para consultas diárias ou eventuais
                    </strong>
                </div>
            </div>
            <Footer />
        </div>
    )
}