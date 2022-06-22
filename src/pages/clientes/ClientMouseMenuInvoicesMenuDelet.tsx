import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesMenuDelete from "./img/ClientsMenuRightMouseInvoicesMenuDelete.png"

export function ClientMouseMenuInvoicesMenuDelet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu{" > "}Deletar</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentada a opção de deletar uma fatura utilizando o clique do lado direito do mouse.Para realizar a deleção é necessário registrar o motivo desta ação.</p>
                        <img src={ClientsMenuRightMouseInvoicesMenuDelete} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Deletar"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}