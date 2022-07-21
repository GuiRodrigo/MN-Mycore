import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialGraph() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Gráfico</h3>

                    <div>
                        <p>Nesta tela é visualizado o gráfico de faturamento por tipo de pagamento, de acordo com os filtros e critérios selecionados.</p>
                        <img src="img/23 - relatorios-fin-graf.png" alt="Relatórios - Financeiro - Gráfico" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}