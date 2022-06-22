import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ShippingListInvoices from "./img/ShippingListInvoices.png"

export function FinancialBankListInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Remessa{" > "}Listar Faturas</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os parâmetros que devem ser configurados para se listar as faturas, a linha digitável ou o número da fatura para efetivar o seu <b>pagamento</b>.</p>
                        <img src={ShippingListInvoices} alt="Remessa - Listar Faturas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}