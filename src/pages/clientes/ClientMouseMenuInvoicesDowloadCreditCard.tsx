import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuLawMouseInvoicesLowCardCredit from "./img/CustomersMenuLawMouseInvoicesLowCardCredit.png"

export function ClientMouseMenuInvoicesDowloadCreditCard() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Baixa por Cartão de Crédito</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizadas as faturas com baixa por cartão de crédio.</p>
                        <img src={CustomersMenuLawMouseInvoicesLowCardCredit} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa por Cartão de Crédito"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}