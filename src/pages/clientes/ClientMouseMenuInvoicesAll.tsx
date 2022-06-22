import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesAll from "./img/ClientsMenuRightMouseInvoicesAll.png"

export function ClientMouseMenuInvoicesAll() {
    return (
        < div id="container" >
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Todos</h3>

                    <div>

                        <p>Na tela, abaixo, são visualizadas todas as faturas emitidas para um determinado período.</p>
                        <img src={ClientsMenuRightMouseInvoicesAll} alt="Clientes - Menu lado direito do mouse - Faturas - Todos"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}