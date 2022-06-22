import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuLawMouseInvoicesViewPrinted1 from "./img/CustomersMenuLawMouseInvoicesViewPrinted1.png"
import CustomersMenuLawMouseInvoicesViewPrinted2 from "./img/CustomersMenuLawMouseInvoicesViewPrinted2.png"

export function ClientMouseMenuInvoicesPrint() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Visualizar Impressão</h3>

                    <div>
                        <p>Na tela, abaixo, para se vizualizar a fatura no modo de impressão, é necessário selecionar o ícone correlacionado.</p>
                        <img src={CustomersMenuLawMouseInvoicesViewPrinted1} alt="Clientes - Menu lado direito do mouse - Faturas - Visualizar Impressão"></img>
                    </div>
                    <div>
                        <p>Na tela, abaixo, é visualizada a fatura em modo de impressão para conferência antes de imprimir.</p>
                        <img src={CustomersMenuLawMouseInvoicesViewPrinted2} alt="Clientes - Menu lado direito do mouse - Faturas - Visualizar Impressão"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}