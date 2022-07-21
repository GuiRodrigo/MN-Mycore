import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialExpiredInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Faturas Vencidas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de faturas vencidas dos clientes cadastrados, de acordo com os filtros e critérios selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV.</p>
                        <img src="img/24 - relatorios-fin-fat-venc.png" alt="Relatórios - Financeiro - Faturas Vencidas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}