import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesExpirationToday from "./img/InvoicesExpirationToday.png"
import InvoicesExpirationTodayMenu from "./img/InvoicesExpirationTodayMenu.png"
import InvoicesExpirationTodayEdit from "./img/InvoicesExpirationTodayEdit.png"
import InvoicesExpirationTodayDelete from "./img/InvoicesExpirationTodayDelete.png"
import InvoicesExpirationTodayPrint1 from "./img/InvoicesExpirationTodayPrint1.png"
import InvoicesExpirationTodayPrint2 from "./img/InvoicesExpirationTodayPrint2.png"

export function FinancialBankWinToday() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Vencimento Hoje</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das faturas com <b>vencimento do dia</b>, sobre as quais se pode realizar algumas operações, tais como: </p>

                        <ul >
                            <li>Selecionar uma fatura</li>
                            <li>Visualizar todas as faturas do cliente</li>
                            <li>Visualizar todas as faturas do cliente em modo de impressão</li>
                            <li>Imprimir a fatura do cliente selecionado, com o vencimento do dia</li>
                            <li>Imprimir várias faturas selecionadas</li>
                            <li>Enviar o código de barras da fatura via SMS</li>
                            <li>Enviar uma fatura por E-mail</li>
                        </ul>

                        <img src={InvoicesExpirationToday} alt="Faturas - Vencimento Hoje" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com as opções de <b>editar</b> e <b>deletar</b>, para operar com a fatura.</p>
                        <img src={InvoicesExpirationTodayMenu} alt="Faturas Vencimento Hoje - Menu" />
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
                        <p>Ao se clicar no ícone de SMS, é exibido uma mensagem para confirmação, ou não, do envio do código de barras da fatura <b>via SMS</b>, para o cliente.</p>
                        <img src={InvoicesExpirationTodayPrint1} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de E-mail, é exibido uma mensagem para confirmação, ou não, do envio da fatura <b>via E-mail</b>, para o cliente.</p>
                        <img src={InvoicesExpirationTodayPrint2} alt="Faturas a Vencer - Imprimir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}