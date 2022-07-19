import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Faturas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de faturas dos clientes cadastrados, de acordo com os filtros e critérios selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV.</p>
                        <img src="img/20 - relatorios-fin-fat.png" alt="Relatórios - Financeiro - Faturas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}