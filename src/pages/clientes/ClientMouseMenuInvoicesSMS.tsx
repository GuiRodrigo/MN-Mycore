import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseInvoicesBarcodesSMS from "./img/ClientsMenuLawMouseInvoicesBarcodesSMS.png"

export function ClientMouseMenuInvoicesSMS() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Código de Barras via Sms</h3>

                    <div>
                        <p>Na tela, abaixo, é visualizada a opção de enviar o código de barras da fatura via SMS.</p>
                        <img src={ClientsMenuLawMouseInvoicesBarcodesSMS} alt="Clientes - Menu lado direito do mouse - Faturas - Cód. Barras vai SMS" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}