import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsCustomersExpiration() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Por Vencimento</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de vencimento por cliente. O relatório possui filtros para avaliações quantitativas diferenciadas.</p>
                        <img src="img/07 - relatorios-cli-venc.png" alt="Relatórios - Por Vencimento" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}