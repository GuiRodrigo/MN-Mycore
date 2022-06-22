import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InvoicesWinPrintMass1 from "./img/InvoicesWinPrintMass1.png"
import InvoicesWinPrintMass2 from "./img/InvoicesWinPrintMass2.png"
import InvoicesWinPrintMass3 from "./img/InvoicesWinPrintMass2.png"
import InvoicesWinLinkPrint from "./img/InvoicesWinLinkPrint.png"

export function FinancialBankPrintMass() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Faturas{" > "}Imprimir em Massa</h3>

                    <div>
                        <p>Ao se clicar sobre o botão <b>Imprimir em Massa</b> é aberta a tela para consulta e seleção das faturas, as quais, se quer imprimir.</p>
                        <img src={InvoicesWinPrintMass1} alt="Faturas a Vencer - Imprimir em Massa" />
                    </div>
                    <div>
                        <p>Após se definir <b>Imprimir em Massa</b> é aberta a tela para consulta e seleção das faturas, as quais, se quer imprimir. O principal campo de seleção para impressão é a faixa da data de <b>vencimento</b>.</p>
                        <img src={InvoicesWinPrintMass2} alt="Faturas a Vencer - Imprimir em Massa" />
                    </div>
                    <div>
                        <p>Após a consulta pode-se selecionar várias faturas para que as mesmas sejam <b>Impressas em Massa</b>.</p>
                        <img src={InvoicesWinPrintMass3} alt="Faturas a Vencer - Imprimir em Massa" />
                    </div>
                    <div>
                        <p>Ao se clicar no botão <b>Imprimir</b> para impressão em massa é exibido um link com o caminho para a visualização e impressão das  faturas para que as mesmas sejam <b>Impressas em Massa</b>.</p>
                        <img src={InvoicesWinLinkPrint} alt="Faturas a Vencer - Link de Impressão" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}