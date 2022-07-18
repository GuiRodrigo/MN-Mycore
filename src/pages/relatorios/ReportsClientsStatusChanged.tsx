import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsStatusChanged() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Status de Alteração</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório por status de alteração entre clientes de pessoa física e jurídica. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/10 - relatorios-cli-stat-alt.png" alt="Relatórios - Por Status de Alteração" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}