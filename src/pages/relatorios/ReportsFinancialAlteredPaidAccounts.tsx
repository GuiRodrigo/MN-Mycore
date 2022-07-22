import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialAlteredPaidAccounts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Contas Pagas Alteradas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de contas pagas alteradas, de um determinado período, de acordo com a empresa e operador selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/37 - relatorios-fin-cts-pag-alt.png" alt="Relatórios - Financeiro - Contas Pagas Alteradas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}