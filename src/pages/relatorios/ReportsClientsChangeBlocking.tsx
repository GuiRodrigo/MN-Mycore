import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsChangeBlocking() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Alteração de Bloqueio</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de alterações de bloqueio dos clientes cadastrados. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/16 - relatorios-cli-alt-bloq.png" alt="Relatórios - Alteração de Bloqueio" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}