import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ReportsClientsChangeMonthlyFee() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Clientes{" > "}Alteração de Mensalidade</h3>

                    <div>
                        <p>Nesta tela é visualizado o relatório de alterações de mensalidade dos clientes cadastrados. Este relatório pode ser exportado para o formato de planilha do Excel .XLSX e do  Acrobat Reader .PDF.</p>
                        <img src="img/14 - relatorios-cli-alt-men.png" alt="Relatórios - Alteração de Mensalidade" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}