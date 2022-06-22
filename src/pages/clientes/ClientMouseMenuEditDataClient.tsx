import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseEditDataCustomer from "./img/CustomersMenuRightMouseEditDataCustomer.png"

export function ClientMouseMenuEditDataClient() {
    return (
        <div id="container">
            <div id="pageContent">
                <Menu />
                <div id="textContent">
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Editar{" > "}Dados do Cliente</h3>

                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse e selecionar-se a opção <b>editar</b>, será exibida a tela com o <b>dados do cliente</b>, onde é possivel fazer alterações.</p>
                        <img src={CustomersMenuRightMouseEditDataCustomer} alt="Clientes - Menu lado direito do mouse - Editar - Dados do Cliente"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}