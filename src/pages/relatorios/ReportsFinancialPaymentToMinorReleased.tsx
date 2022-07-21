import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialPaymentToMinorReleased() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Pagamento a Menor Liberado</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de pagamentos a menor, de um determinado período, de acordo com a empresa, bairro e cidade selecionados. Esse pagamento pode ser liberado para se realizar com o valor a menor. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/32 - relatorios-fin-pag-men-lib.png" alt="Relatórios - Financeiro - Pagamento a Menor Liberado" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}