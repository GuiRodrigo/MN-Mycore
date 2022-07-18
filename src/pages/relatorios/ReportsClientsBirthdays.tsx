import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsBirthdays() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Por Aniversariantes</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de aniversariantes por cliente. O relatório possui filtros para avaliações quantitativas diferenciadas.</p>
                        <img src="img/06 - relatorios-cli-aniv.png" alt="Relatórios - Por Aniversariantes" />
                    </div>
                    <div>
                        <p>Ao clicar sobre uma das barras do gráfico, será exibida uma lista com os aniversariantes referentes ao periodo. </p>
                        <img src="img/06a - relatorios-cli-aniv-dest.png" alt="Relatórios - Por Aniversariantes" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}