import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialPaymentToMinor() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Pagamento a Menor</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de pagamentos a menor, de um determinado período, de acordo com a empresa, bairro e cidade selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/30 - relatorios-fin-pag-men.png" alt="Relatórios - Financeiro - Pagamento a Menor" />
                    </div>
                    <div>
                        <p>Após a verificação dos pagamentos a menor, pode-se liberar um cliente/nota no sistema.</p>
                        <img src="img/31 - relatorios-fin-pag-men-lib-av.png" alt="Relatórios - Financeiro - Pagamento a Menor Liberado" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}