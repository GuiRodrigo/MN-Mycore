import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesMenuUndoPayment from "./img/CustomersMenuRightMouseInvoicesMenuUndoPayment.png"

export function ClientMouseMenuInvoicesMenuUndoPayment() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "} Menu{" > "}Desfazer Pagamento</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentada o opção de desfazer o pagamento referente à fatura, ao se clicar com o botão do lado direito do mouse.O desfazimento de pagamento pode ser realizado para os pagamentos que estão <b>em aberto</b>, com <b>baixa por retorno</b> ou com <b>baixa por cartão de crédito</b>.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuUndoPayment} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Desfazer Pagamento" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}