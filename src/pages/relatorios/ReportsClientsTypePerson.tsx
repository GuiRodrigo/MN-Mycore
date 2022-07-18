import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsTypePerson() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Por Tipo de Pessoa</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório por tipo de pessoa para avaliação entre clientes de pessoa física e jurídica.</p>
                        <img src="img/04 - relatorios-cli-tp-pess.png" alt="Relatórios - Por Tipo de Pessoa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}