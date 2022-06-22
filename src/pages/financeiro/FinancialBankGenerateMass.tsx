import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesGenerateMass from "./img/InvoicesGenerateMass.png"

export function FinancialBankGenerateMass() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Gerar em Massa</h3>

                    <div>
                        <p>Nesta tela, visualiza-se os parâmtros de ajuste para geração das <b>faturas em massa</b>.</p>
                        <img src={InvoicesGenerateMass} alt="Faturas - Gerar em Massa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}