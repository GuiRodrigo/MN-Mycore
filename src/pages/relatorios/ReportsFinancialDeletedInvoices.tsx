import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialDeletedInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Faturas Deletadas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de faturas deletadas, de um determinado período, de acordo com a empresa e operador selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/33 - relatorios-fin-fat-del.png" alt="Relatórios - Financeiro - Faturas Deletadas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}