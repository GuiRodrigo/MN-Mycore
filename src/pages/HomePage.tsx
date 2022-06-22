import { Menu } from "../components/Menu"
import { Footer } from "../components/footer"

import '../styles/contend.scss'
import '../styles/Footer.scss'

export function HomePage() {

    return (
        <div id="container">
            <div id="pageContent">
                <Menu />
                <div id="textContent" >
                    <h1>Bem-vindo ao MyCore - Wiki !</h1>
                    <strong>
                        Este é o site de ajuda do MyCore que foi desenvolvido para orientar no uso do sistema
                        e tirar dúvidas de navegação em seus módulos componentes.
                    </strong>
                    <br />
                    <strong>
                        O site foi desenvolvido contemplando todas as funcionalidades de cada módulo e cada tela dos seus respectivos
                        módulos, sendo extremamente útil como fonte para consultas diárias ou eventuais.

                    </strong>
                </div>
            </div>
            <Footer />
        </div >
    )
}