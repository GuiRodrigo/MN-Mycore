import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettledInvoices from "./img/SettledInvoices.png"
import FaturasLiquidadasMenu from "./img/FaturasLiquidadasMenu.png"
import SettledInvoicesUndoDownload from "./img/SettledInvoicesUndoDownload.png"
import SettledInvoicesUndoShipment from "./img/SettledInvoicesUndoShipment.png"

export function FinancialBankLiquids() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Liquidadas</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista das faturas <b>liquidadas</b>, sobre as quais se pode realizar algumas operações, tais como: </p>
                        <img src={SettledInvoices} alt="Faturas Liquidadas" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, sobre um cliente da lista, é exibido um menu com as opções de <b>desfazer baixa</b> e <b>desfazer remessa</b> das faturas.</p>
                        <img src={FaturasLiquidadasMenu} alt="Faturas Liquidadas - Menu" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opçao de <b>desfazer baixa</b>, uma mensagem é exibida para confirmação da operação.</p>
                        <img src={SettledInvoicesUndoDownload} alt="Faturas Liquidadas - Desfazer Baixa" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de <b>desfazer remessa</b>, uma mensagem é exibida para confirmação da operação.</p>
                        <img src={SettledInvoicesUndoShipment} alt="Faturas Liquidadas - Desfazer Remessa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >

    )
}