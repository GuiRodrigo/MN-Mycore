import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseAutomação from "./img/ClientsMenuLawMouseAutomação.png"

export function ClientMouseMenuEditAutomation() {
    return (
        <div id="container">
            <div id="pageContent">
                <Menu />
                <div id="textContent">
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Editar{" > "}Automação</h3>

                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse e selecionar-se a opção <b>editar</b>, será exibida a tela com as informações de <b>automação</b> aplicadas ao cliente, onde é possivel fazer alterações.</p>
                        <img src={ClientsMenuLawMouseAutomação} alt="Clientes - Menu lado direito do mouse - Automação"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}