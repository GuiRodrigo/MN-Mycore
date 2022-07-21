import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialRemittancesDiscarded() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Remessas Desfeitas</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de remessas desfeitas, de um determinado período, de acordo com a empresa e operador selecionados. O relatório pode ser exportado para os formatos .XLSX, .PNG e .CSV. </p>
                        <img src="img/35 - relatorios-fin-rem-des.png" alt="Relatórios - Financeiro - Remessas Desfeitas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}