import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsRegisteredClients() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Clientes Cadastrados</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de clientes cadastrados. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/13 - relatorios-cli-cad.png" alt="Relatórios - Clientes Cadastrados" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}