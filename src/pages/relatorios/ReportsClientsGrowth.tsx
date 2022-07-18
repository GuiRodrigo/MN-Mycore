import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsGrowth() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Crescimento</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de crescimento por tipo de cliente. O relatório possui filtros para avaliações quantitativas diferenciadas.</p>
                        <img src="img/09 - relatorios-cli-cres.png" alt="Relatórios - Por Crescimento" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}