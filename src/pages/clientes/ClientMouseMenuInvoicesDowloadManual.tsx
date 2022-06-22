import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseInvoicesBaixaManual from "./img/ClientsMenuLawMouseInvoicesBaixaManual.png"

export function ClientMouseMenuInvoicesDowloadManual() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Baixa Manual</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizadas as faturas com baixa manual.</p>
                        <img src={ClientsMenuLawMouseInvoicesBaixaManual} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa Manual" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}