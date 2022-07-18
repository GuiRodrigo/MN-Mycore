import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsChangeLogin() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Alteração de Login</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de alteração por login. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/12 - relatorios-cli-alt.png" alt="Relatórios - Alteração de Login" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}