import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesMenuDiscountMissConnection from "./img/CustomersMenuRightMouseInvoicesMenuDiscountMissConnection.png"

export function ClientMouseMenuInvoicesMenuDiscountConnection() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu{" > "}Desconto por Falta de Conexão</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentada o opção de ajustar o número de dias que o cliente ficou sem Internet, para que o sistema calcule o desconto por falta de conexão.O desconto não poderá ser aplicado quando ocorrer <b>remessa bancária</b> ou geração da fatura por <b>gateway de pagamento</b>.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuDiscountMissConnection} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Desconto por Falta de Conexão"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}