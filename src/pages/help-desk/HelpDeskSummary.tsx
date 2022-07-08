import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskSummary() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk {">"} Resumo</h3>

                    <div>
                        <p>Nesta tela são visualizados os relatórios <b>resumidos</b> dos chamados abertos e fechados nos últimos 7dias, 30 dias e 12 meses.</p>
                        <img src="img/01 - helpd-resumo.png" alt="Help Desk - Relatórios Resumidos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}