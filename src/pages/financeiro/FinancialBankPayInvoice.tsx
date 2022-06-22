import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesDeleted from "./img/InvoicesDeleted.png"

export function FinancialBankPayInvoice() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Pagar Fatura</h3>

                    <div>
                        <p>Nesta tela, visualiza-se uma caixa de diálogo onde deve ser informado o código de barras, a linha digitável ou o número da fatura para efetivar o seu <b>pagamento</b>.</p>
                        <img src={InvoicesDeleted} alt="Faturas - Deletadas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}