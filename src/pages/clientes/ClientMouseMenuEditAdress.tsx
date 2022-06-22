import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseEditAddress from "./img/CustomersMenuRightMouseEditAddress.png"

export function ClientMouseMenuEditAdress() {
    return (
        <div id="container">
            <div id="pageContent">
                <Menu />
                <div id="textContent">
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Editar{" > "}Endereço</h3>

                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse e selecionar-se a opção <b>editar</b>, será exibida a tela com o <b>endereço</b> do cliente, onde é possivel fazer alterações.</p>
                        <img src={CustomersMenuRightMouseEditAddress} alt="Clientes - Menu lado direito do mouse - Editar - Endereço"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}