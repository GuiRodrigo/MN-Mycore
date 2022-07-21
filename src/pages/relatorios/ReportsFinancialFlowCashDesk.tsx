import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialFlowCashDesk() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Fluxo de Caixa</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de fluxo de caixa, de um determinado período, de acordo com os filtros e critérios selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/28 - relatorios-fin-flu-cx.png" alt="Relatórios - Financeiro - Fluxo de Caixa" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}