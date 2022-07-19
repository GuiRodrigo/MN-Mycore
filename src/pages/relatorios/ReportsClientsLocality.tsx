import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsLocality() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Localidade</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de localidade dos clientes cadastrados. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX.</p>
                        <img src="img/17 - relatorios-cli-loc.png" alt="Relatórios - Cliente Localidade" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}