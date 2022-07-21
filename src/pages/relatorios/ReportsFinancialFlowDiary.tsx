import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialFlowDiary() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Fluxo Diário</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de fluxo diário, de um determinado período, de acordo com a empresa selecionada. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/29 - relatorios-fin-flu-dia.png" alt="Relatórios - Financeiro - Fluxo Diário" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}