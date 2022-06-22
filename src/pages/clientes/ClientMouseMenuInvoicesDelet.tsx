import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesDeleted from "./img/ClientsMenuRightMouseInvoicesDeleted.png"

export function ClientMouseMenuInvoicesDelet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Deletados</h3>
                    <div>

                        <p>Na tela, abaixo, são visualizadas as faturas deletadas no sistema.</p>
                        <img src={ClientsMenuRightMouseInvoicesDeleted} alt="Clientes - Menu lado direito do mouse - Faturas - Deletados"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}