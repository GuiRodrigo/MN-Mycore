import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialRestoredInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Faturas Restauradas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de faturas restauradas, de um determinado período, de acordo com a empresa e operador selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/34 - relatorios-fin-fat-rest.png" alt="Relatórios - Financeiro - Faturas Restauradas" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}