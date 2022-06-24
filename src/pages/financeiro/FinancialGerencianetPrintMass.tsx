import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGerencianetPrintMass1 from "./img/FinancialGerencianetPrintMass1.png"
import FinancialGerencianetPrintMass2 from "./img/FinancialGerencianetPrintMass2.png"
import FinancialGerencianetPrintMass3 from "./img/FinancialGerencianetPrintMass3.png"
import FinancialGerencianetPrintMass4 from "./img/FinancialGerencianetPrintMass4.png"

export function FinancialGerencianetPrintMass() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Impressão em Massa</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Impressão em Massa</b>, abre-se uma janela onde os parâmetros devem ser informados para geração de todos os carnês e faturas existentes na tela.</p>
                        <img src={FinancialGerencianetPrintMass1} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>
                    <div>
                        <p>Após a geração dos carnês e faturas pertinentes aos parâmetros definidos, obtem-se o link para acesso, visualização e impressão dos mesmos.</p>
                        <img src={FinancialGerencianetPrintMass2} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>
                    <div>
                        <p>Após a geração dos carnês e faturas pertinentes aos parâmetros definidos, pode-se visualizar e imprimir os mesmos.</p>
                        <img src={FinancialGerencianetPrintMass3} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>
                    <div>
                        <p>Após a visualizar e imprimir os carnês e faturas, para deixar a tela de impressão é necessário confirmar.</p>
                        <img src={FinancialGerencianetPrintMass4} alt="Financeiro - Gerencianet - Impressão em Massa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}