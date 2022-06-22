import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesSupportsPaid from "./img/InvoicesSupportsPaid.png"

export function FinancialBankSupportsPaid() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Suportes Pagos</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das faturas a serem geradas pelos <b>Suportes Pagos</b>, relativos aos serviços realizados para os clientes.</p>
                        <img src={InvoicesSupportsPaid} alt="Faturas - Suportes Pagos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}