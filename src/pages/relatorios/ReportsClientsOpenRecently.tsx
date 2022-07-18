import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsOpenRecently() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Abertos Recentemente</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de clientes abertos recentemente. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/11 - relatorios-cli-aber.png" alt="Relatórios - Abertos Recentemente" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}