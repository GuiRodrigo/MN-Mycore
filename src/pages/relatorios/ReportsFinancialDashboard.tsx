import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsFinancialDashboard() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Financeiro{" > "}Dashboard</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório do dashboard que demonstra uma visão analítica das finanças, diárias, semanais, mensais e anual.</p>
                        <img src="img/19 - relatorios-fin-dsb.png" alt="Relatórios - Financeiro - Dashboard" />
                    </div >
                    <div>
                        <p>Os painéis de cada indicador e suas métricas podem ser exibidos individualmente, assim como os demais indicadores. Ex.: Recebidos e a Receber.</p>
                        <img src="img/19a - relatorios-fin-receb.png" alt="Relatórios - Financeiro - Recebidos" />
                    </div >
                    <div>
                        <p>Outro painel com indicador disponível é o relatório anual de valores recebidos e a receber.</p>
                        <img src="img/19b - relatorios-fin-receb-ano.png" alt="Relatórios - Financeiro - Anual" />
                    </div >


                </div>
            </div >
            <Footer />
        </div >
    )
}