import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesMenuUndoShipping from "./img/CustomersMenuRightMouseInvoicesMenuUndoShipping.png"

export function ClientMouseMenuInvoicesMenuUndoShipment() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu{" > "}Desfazer Remessa</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentada o opção de desfazer a remessa da fatura. Está opção é realizada para faturas que estão com <b>baixa por retorno</b> e <b>baixa por cartão de crédito</b>.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuUndoShipping} alt="Clientes - Menu lado direito do mouse - Faturas - Menu -  Desfazer Remessa" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}