import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseInvoicesSendEmail from "./img/ClientsMenuLawMouseInvoicesSendEmail.png"

export function ClientMouseMenuInvoicesEmail() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Enviar por E-mail</h3>

                    <div>
                        <p>Na tela, abaixo, é visualizada a opção de enviar a fatura por e-mail.</p>
                        <img src={ClientsMenuLawMouseInvoicesSendEmail} alt="Clientes - Menu lado direito do mouse - Faturas - Enviar por E-mail" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}