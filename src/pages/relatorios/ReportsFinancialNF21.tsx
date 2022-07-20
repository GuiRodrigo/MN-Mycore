import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialNF21() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}NF 21</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de notas fiscais 21, de um determinado período, de acordo com os filtros e critérios selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV.</p>
                        <img src="img/21 - relatorios-fin-nf21.png" alt="Relatórios - Financeiro - NF 21" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}