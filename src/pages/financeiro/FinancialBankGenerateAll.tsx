import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";
import ShipmentGenerateAll from "./img/ShipmentGenerateAll.png"

export function FinancialBankGenerateAll() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Remessa{" > "}Gerar Todos</h3>

                    <div>
                        <p>Ao se clicar no ícone <b>gerar todos</b>, são realizas as remessas para todas as faturas listadas na tela.</p>
                        <img src={ShipmentGenerateAll} alt="Remessa - Gerar Todos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}