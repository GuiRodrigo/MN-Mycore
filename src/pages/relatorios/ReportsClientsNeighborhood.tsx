import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsNeighborhood() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Por Bairros</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de clientes por bairros para avaliação da concentração das instalações por localidade.</p>
                        <img src="img/02 - relatorios-cli-bai.png" alt="Relatórios - Por Bairros" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}