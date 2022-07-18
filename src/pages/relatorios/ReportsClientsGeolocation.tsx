import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsGeolocation() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios Clientes{" > "}Por Geolocalização</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de geolocalização por cliente. O relatório possui filtros para avaliações quantitativas diferenciadas.</p>
                        <img src="img/08 - relatorios-cli-geo.png" alt="Relatórios - Por Geolocalização" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}