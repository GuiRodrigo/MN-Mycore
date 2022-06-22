import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseEditContact from "./img/CustomersMenuRightMouseEditContact.png"

export function ClientMouseMenuEditContract() {
    return (
        <div id="container">
            <div id="pageContent">
                <Menu />
                <div id="textContent">
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Editar{" > "}Contrato</h3>

                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse e selecionar-se a opção <b>editar</b>, será exibida a tela com as informações de <b>contato</b> do cliente, onde é possivel fazer alterações.</p>
                        <img src={CustomersMenuRightMouseEditContact} alt="Clientes - Menu lado direito do mouse - Editar - Contato" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}