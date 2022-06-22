import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ShipmentGenerateSelected from "./img/ShipmentGenerateSelected.png"

export function FinancialBankGenerateSelected() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Remessa{" > "}Gerar Selecionado</h3>

                    <div>
                        <p>Ao se clicar no ícone <b>gerar selecionado</b>, é realiza a remessa para a fatura selecionada.</p>
                        <img src={ShipmentGenerateSelected} alt="Remessa - Gerar Selecionado" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}