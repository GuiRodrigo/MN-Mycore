import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsHelpDeskSummary() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Help Desk{" > "}Resumo</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório gráfico dos chamados abertos e fechados no período de 7 dias, 30 dias e 12 meses. </p>
                        <img src="img/38 - relatorios-hd-resu.png" alt="Relatórios - Help Desk - Resumo" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}