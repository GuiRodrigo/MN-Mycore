import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterOpenSupport() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Call Center{" > "}Abrir Suporte</h3>

                    <div>
                        <p>Nesta tela estão localizados os campos para preenchimento, necessário à abertura de um chamado no call center.</p>
                        <img src="img/13 - helpd-call-cent-abr-sup.png" alt="Help Desk - Call Center - Abrir Suporte" />
                    </div>
                    <div>
                        <p>Clicando-se no botão <b>Adicionar anexos</b> pode-se inserir um arquivo no chamado para complemento de informações.</p>
                        <img src="img/13a - helpd-call-cent-abr-sup-anex.png" alt="Help Desk - Call Center - Anexos" />
                    </div>
                    <div>
                        <p>Na tela de gerenciamento dos anexos, ficam disponíveis os arquivos que foram inseridos no chamado.</p>
                        <img src="img/13b - helpd-call-cent-abr-sup-incl-anex.png" alt="Help Desk - Call Center - Incluir Anexos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}