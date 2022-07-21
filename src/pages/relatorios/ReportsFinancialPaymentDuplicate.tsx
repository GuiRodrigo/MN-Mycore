import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialPaymentDuplicate() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Pagamento Duplicado</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de pagamentos duplicados, de um determinado período, de acordo com os filtros e critérios selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/27 - relatorios-fin-pag-dup.png" alt="Relatórios - Financeiro - Pagamento Duplicado" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}