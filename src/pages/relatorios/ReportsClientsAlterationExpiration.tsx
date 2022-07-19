import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsAlterationExpiration() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Alteração do Vencimento</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de alterações do vencimento dos clientes cadastrados. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/15 - relatorios-cli-alt-ven.png" alt="Relatórios - Alteração de Vencimento" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}