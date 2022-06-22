import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuLawMouseInvoicePromisePayment from "./img/CustomersMenuLawMouseInvoicePromisePayment.png"

export function ClientMouseMenuInvoicesPromisePayment() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Fatura{" > "}Promessa de Pagamento</h3>
                    <div>

                        <p>Na tela, abaixo, são visualizadas as faturas com promessa de pagamento pelo cliente.</p>
                        <img src={CustomersMenuLawMouseInvoicePromisePayment} alt="Clientes - Menu lado direito do mouse - Fatura - Promessa de Pagamento"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )

}