import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialComparative() {

    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Comparativo</h3>

                    <div>
                        <p>Nesta tela é visualizado o gráfico comparativo por data de pagamentos / valores / quantitativo de acordo com os critérios selecionados. O conteúdo do relatório pode ser exportado para os formatos .XLSX, .PDF e .CSV</p>
                        <img src="img/34a - relatorios-fin-comp.png" alt="Relatórios - Financeiro - Gráfico Comparativo" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}