import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DeletedInvoices from "./img/DeletedInvoices.png"
import InvoicesDeletedMenu from "./img/InvoicesDeletedMenu.png"
import DeletedInvoicesRestore from "./img/DeletedInvoicesRestore.png"

export function FinancialBankDeleted() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Deletadas</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das faturas <b>deletadas</b>, sobre as quais se pode realizar algumas operações, tais como: </p>
                        <img src={DeletedInvoices} alt="Faturas - Deletadas" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com a opção de <b>restaurar</b> uma fatura.</p>
                        <img src={InvoicesDeletedMenu} alt="Faturas Deletadas - Menu" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de <b>restaurar</b>, pode-se restaurar a fatura do cliente selecionado.</p>
                        <img src={DeletedInvoicesRestore} alt="Faturas - Deletadas - Restaurar" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}