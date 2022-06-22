import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesOpenInvoice from "./img/InvoicesOpenInvoice.png"
import OpenInvoiceMenu from "./img/OpenInvoiceMenu.png"
import InvoicesExpirationTodayEdit from "./img/InvoicesExpirationTodayEdit.png"
import InvoicesExpirationTodayDelete from "./img/InvoicesExpirationTodayDelete.png"
import InvoicesWinPreview from "./img/InvoicesWinPreview.png"
import InvoicesWinPrint01 from "./img/InvoicesWinPrint01.png"
import InvoicesWinPrint02 from "./img/InvoicesWinPrint02.png"
import InvoicesWinPrint03 from "./img/InvoicesWinPrint02.png"

export function FinancialBankOpenInvoice() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Abrir Fatura</h3>

                    <div>
                        <p>Nesta tela, é necessário ler o codigo de barras, ou inserir a linha digitável, ou ainda digitar o número da fatura para a sua <b>abertura</b>, podendo também:</p>

                        <ul >
                            <li>Selecionar uma fatura</li>
                            <li>Visualizar todas as faturas do cliente</li>
                            <li>Visualizar todas as faturas do cliente em modo de impressão</li>
                            <li>Imprimir a fatura do cliente</li>
                            <li>Enviar o código de barras da fatura via SMS</li>
                            <li>Enviar uma fatura por E-mail</li>
                        </ul>

                        <img src={InvoicesOpenInvoice} alt="Faturas - Abrir Fatura" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com as opções de <b>editar</b> e <b>deletar</b>, uma fatura.</p>
                        <img src={OpenInvoiceMenu} alt="Abrir Faturas - Menu" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opçao de <b>editar</b>, a fatura é editada para eventuais modificações.</p>
                        <img src={InvoicesExpirationTodayEdit} alt="Faturas Vencimento Hoje - Editar" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de <b>deletar</b>, pode-se excluir a fatura selecionada.</p>
                        <img src={InvoicesExpirationTodayDelete} alt="Faturas Vencimento Hoje - Deletar" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone com a impressora, é exibida a <b>visualização</b> de todas as faturas para o cliente selecionado.</p>
                        <img src={InvoicesWinPreview} alt="Faturas a Vencer - Visualizar" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de imprimir, é exibida a <b>fatura especifica</b>, à vencer, para o cliente selecionado.</p>
                        <img src={InvoicesWinPrint01} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de SMS, é exibido uma mensagem para confirmação, ou não, do envio do código de barras da fatura <b>via SMS</b>, para o cliente.</p>
                        <img src={InvoicesWinPrint02} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de E-mail, é exibido uma mensagem para confirmação, ou não, do envio da fatura <b>via E-mail</b>, para o cliente.</p>
                        <img src={InvoicesWinPrint03} alt="Faturas a Vencer - Imprimir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}