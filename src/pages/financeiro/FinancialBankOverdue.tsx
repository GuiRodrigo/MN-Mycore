import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import OverdueInvoices from "./img/OverdueInvoices.png"
import OverdueInvoicesMenu from "./img/OverdueInvoicesMenu.png"
import OverdueInvoicesEdit from "./img/OverdueInvoicesEdit.png"
import OverdueInvoicesDelete from "./img/OverdueInvoicesDelete.png"
import InvoicesWinPrint1 from "./img/InvoicesWinPrint1.png"
import InvoicesWinPrint2 from "./img/InvoicesWinPrint2.png"

export function FinancialBankOverdue() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Vencidas</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das faturas <b>vencidas</b>, sobre as quais se pode realizar algumas operações, tais como: </p>
                        <ul>
                            <li>Selecionar uma fatura</li>
                            <li>Visualizar todas as faturas do cliente</li>
                            <li>Visualizar todas as faturas do cliente em modo de impressão</li>
                            <li>Imprimir a fatura, vencida, do cliente selecionado</li>
                            <li>Imprimir várias faturas selecionadas</li>
                            <li>Enviar o código de barras da fatura via SMS</li>
                            <li>Enviar uma fatura por E-mail</li>
                        </ul>

                        <img src={OverdueInvoices} alt="Faturas Vencidas" />
                    </div>

                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com as opções de <b>editar</b> e <b>deletar</b>, para operar com a fatura.</p>
                        <img src={OverdueInvoicesMenu} alt="Faturas Vencidas - Menu" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opçao de <b>editar</b>, a fatura é editada para eventuais modificações.</p>
                        <img src={OverdueInvoicesEdit} alt="Faturas a Vencidas - Editar" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de <b>deletar</b>, pode-se excluir a fatura selecionada.</p>
                        <img src={OverdueInvoicesDelete} alt="Faturas a Vencidas - Deletar" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de SMS, é exibido uma mensagem para confirmação, ou não, do envio do código de barras da fatura <b>via SMS</b>, para o cliente.</p>
                        <img src={InvoicesWinPrint1} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de E-mail, é exibido uma mensagem para confirmação, ou não, do envio da fatura <b>via E-mail</b>, para o cliente.</p>
                        <img src={InvoicesWinPrint2} alt="Faturas a Vencer - Imprimir" />
                    </div>


                </div >
            </div >
            <Footer />
        </div >
    )
}