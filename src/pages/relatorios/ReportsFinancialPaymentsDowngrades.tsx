import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialPaymentsDowngrades() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Pagamentos Desfeitos</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de pagamentos desfeitos, de um determinado período, de acordo com a empresa e operador selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/36 - relatorios-fin-pag-des.png" alt="Relatórios - Financeiro - Pagamentos Desfeitos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}