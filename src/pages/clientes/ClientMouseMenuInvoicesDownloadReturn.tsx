import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseInvoicesLowReturn1 from "./img/ClientsMenuLawMouseInvoicesLowReturn1.png"
import ClientsMenuLawMouseInvoicesLowReturn2 from "./img/ClientsMenuLawMouseInvoicesLowReturn2.png"
import CustomersMenuLawMouseInvoicesLowReturnIconReceipt from "./img/CustomersMenuLawMouseInvoicesLowReturnIconReceipt.png"
import CustomersMenuRightMouseInvoicesLowReturnButtonPrint from "./img/CustomersMenuRightMouseInvoicesLowReturnButtonPrint.png"

export function ClientMouseMenuInvoicesDowloadReturn() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Baixa por Retorno</h3>


                    <div>
                        <p>Na tela, abaixo, são visualizadas as faturas com baixa por retorno.</p>
                        <img src={ClientsMenuLawMouseInvoicesLowReturn1} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa por Retorno"></img>
                    </div>
                    <div>
                        <p>Selecionando o ícone de recibo, visualiza-se o recibo na tela.</p>
                        <img src={CustomersMenuLawMouseInvoicesLowReturnIconReceipt} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa por Retorno - Ícone Recibo"></img>
                    </div>
                    <div>
                        <p>Na tela do recibo, pressionando o botão <b>imprimir</b> visualiza-se o recibo na tela pronto para impressão.</p>
                        <img src={CustomersMenuRightMouseInvoicesLowReturnButtonPrint} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa por Retorno - Botão Imprimir"></img>
                    </div>
                    <div>
                        <p>Na tela do recibo ou na tela das faturas, pressionando-se o botão do <b>WhatsApp</b> o usuário é direcionado para um link onde pode-se enviar a url de impressão do comprovante e a mensagem personalizada configurada no MyCore.</p>
                        <img src={ClientsMenuLawMouseInvoicesLowReturn2} alt="Clientes - Menu lado direito do mouse - Faturas - Baixa por Retorno"></img>
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}