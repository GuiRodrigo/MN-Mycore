import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesPrint from "./img/CustomersMenuRightMouseInvoicesPrint.png"
import CustomersMenuLawMouseInvoicesViewPrinted2 from "./img/CustomersMenuLawMouseInvoicesViewPrinted2.png"

export function ClientMouseMenuInvoicesToPrint() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Imprimir</h3>

                    <div>
                        <p>Na tela, abaixo, para se vizualizar a fatura no formato de impressão, é necessário selecionar o ícone correlacionado.</p>
                        <img src={CustomersMenuRightMouseInvoicesPrint} alt="Clientes - Menu lado direito do mouse - Faturas - Imprimir" ></img>
                    </div>
                    <div>
                        <p>Na tela, abaixo, é visualizada a fatura configurada na tela para impressão.</p>
                        <img src={CustomersMenuLawMouseInvoicesViewPrinted2} alt="Clientes - Menu lado direito do mouse - Faturas - Imprimir" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}