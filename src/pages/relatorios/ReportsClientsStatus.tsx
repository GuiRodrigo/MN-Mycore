import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsStatus() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Por Status</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório por tipo de pessoa para avaliação entre clientes de pessoa física e jurídica.</p>
                        <img src="img/05 - relatorios-cli-stat.png" alt="Relatórios - Por Status" />
                    </div>



                </div>
            </div >
            <Footer />
        </div >
    )
}