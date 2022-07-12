import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterEditClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Call Center{" > "}Editar Cliente</h3>

                    <div>
                        <p>Nesta tela são visualizados os campos com os dados do cliente para confirmação de informações necessárias ao prosseguimento de chamados no call center.</p>
                        <img src="img/16 - helpd-call-cent-edi-cli-dcli.png" alt="Help Desk - Call Center - Dados Cliente" />
                    </div>
                    <div>
                        <p>Dentre as informações disponíveis dos clientes, estão os dados de endereço.</p>
                        <img src="img/17 - helpd-call-cent-edi-cli-end.png" alt="Help Desk - Call Center - Editar Cliente - Endereço" />
                    </div>
                    <div>
                        <p>Dentre as informações disponíveis dos clientes, estão os dados de contato.</p>
                        <img src="img/18 - helpd-call-cent-edi-cli-cont.png" alt="Help Desk - Call Center - Editar Cliente - Contato" />
                    </div>
                    <div>
                        <p>Os parâmetros de automação definem como será a integração do cliente com os dados e processos do sistema.</p>
                        <img src="img/19 - helpd-call-cent-edi-cli-aut.png" alt="Help Desk - Call Center - Editar Cliente - Automação" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}