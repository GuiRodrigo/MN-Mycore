import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesDue from "./img/InvoicesDue.png"
import InvoicesDueMenu1 from "./img/InvoicesDueMenu1.png"
import InvoicesDuePreviewPrint from "./img/InvoicesDuePreviewPrint.png"
import InvoicesDueViewInvoice from "./img/InvoicesDueViewInvoice.png"
import InvoicesDueMenu2 from "./img/InvoicesDueMenu2.png"
import InvoicesDueEdit from "./img/InvoicesDueEdit.png"
import InvoicesDueDelete from "./img/InvoicesDueDelete.png"
import InvoicesDuePreview from "./img/InvoicesDuePreview.png"
import InvoicesDuePrint1 from "./img/InvoicesDuePrint1.png"
import InvoicesDuePrint2 from "./img/InvoicesDuePrint2.png"
import InvoicesDuePrint3 from "./img/InvoicesDuePrint3.png"

export function FinancialBankInvoicesWin() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Faturas a Vencer</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das <b>faturas a vencer</b>, sobre as quais se pode realizar algumas operações, tais como: </p>
                        <img src={InvoicesDue} alt="Faturas a Vencer" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone do quadrado, na lateral direita, um item da lista fica selecionado e o botão de <b>Imprimir Selecionados</b> é disponibilizado para a impressão daquela fatura.</p>
                        <img src={InvoicesDueMenu1} alt="Faturas a Vencer - Menu" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre o botão <b>Imprimir Selecionados</b> é disponibilizada a visualização da fatura na tela para conferência e impressão.</p>
                        <img src={InvoicesDuePreviewPrint} alt="Faturas a Vencer - Visualizar Impressão" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre o botão <b>Imprimir em Massa</b> é aberta a tela para consulta e seleção das faturas, as quais, se quer imprimir.</p>
                        <p>Ao se clicar sobre o <b>link</b> é disponibilizada a visualização da fatura na tela para conferência e impressão.</p>
                        <img src={InvoicesDueViewInvoice} alt="Faturas a Vencer - Visualizar Fatura" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com as opções de <b>editar</b> e <b>deletar</b>, para operar com a fatura.</p>
                        <img src={InvoicesDueMenu2} alt="Faturas a Vencer - Menu" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opçao de <b>editar</b>, a fatura é editada para eventuais modificações.</p>
                        <img src={InvoicesDueEdit} alt="Faturas a Vencer - Editar" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de <b>deletar</b>, pode-se excluir a fatura selecionada.</p>
                        <img src={InvoicesDueDelete} alt="Faturas a Vencer - Deletar" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone com a impressora, é exibida a <b>visualização</b> de todas as faturas para o cliente selecionado.</p>
                        <img src={InvoicesDuePreview} alt="Faturas a Vencer - Visualizar" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de imprimir, é exibida a <b>fatura especifica</b>, à vencer, para o cliente selecionado.</p>
                        <img src={InvoicesDuePrint1} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de SMS, é exibido uma mensagem para confirmação, ou não, do envio do código de barras da fatura <b>via SMS</b>, para o cliente.</p>
                        <img src={InvoicesDuePrint2} alt="Faturas a Vencer - Imprimir" />
                    </div>
                    <div>
                        <p>Ao se clicar no ícone de E-mail, é exibido uma mensagem para confirmação, ou não, do envio da fatura <b>via E-mail</b>, para o cliente.</p>
                        <img src={InvoicesDuePrint3} alt="Faturas a Vencer - Imprimir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}