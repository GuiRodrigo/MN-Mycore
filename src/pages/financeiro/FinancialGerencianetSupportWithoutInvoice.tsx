import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGerencianetPrintingMass1 from "./img/FinancialGerencianetPrintingMass1.png"
import FinancialGerencianetPrintingMass2 from "./img/FinancialGerencianetPrintingMass2.png"

export function FinancialGerencianetSupportWithoutInvoice() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Suportes sem Fatura</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Suportes sem Fatura</b>, abre-se uma janela na qual, por meio de parâmetros, se verifica todos os serviços realizados para os quais não foram emitidas faturas e pode-se gerá-las.</p>
                        <img src={FinancialGerencianetPrintingMass1} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>
                    <div>
                        <p>Nesta janela o ícone <b>gerar</b> fica disponível para as faturas que ainda não foram geradas. Ao clicar sobre o botão, basta escolher a data e plano de contas para o qual se quer gerar a fatura.</p>
                        <img src={FinancialGerencianetPrintingMass2} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}