import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialInvoicesOverdueReceive() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Faturas Venc./Receber</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de clientes com faturas vencidas e a vencer, de acordo com os critérios selecionados. O conteúdo do relatório pode ser exportado para os formatos .XLSX, .PDF e .CSV.</p>
                        <img src="img/66 - relatorios-fat-venc-rec.png" alt="Relatórios - Financeiro - Gráfico Faturas Venc./Receber" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}