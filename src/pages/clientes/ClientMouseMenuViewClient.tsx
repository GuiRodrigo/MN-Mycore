import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseViewClients from "./img/ClientsMenuRightMouseViewClients.png"

export function ClientMouseMenuViewClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Visualizar{" > "}Cliente</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizados os dados pessoais do cliente.</p>
                        <img src={ClientsMenuRightMouseViewClients} alt="Clientes - Menu lado direito do mouse - Visualizar Clientes" ></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}