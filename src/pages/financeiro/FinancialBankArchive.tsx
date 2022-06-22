import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ShipmentFiles1 from "./img/ShipmentFiles1.png"
import ShipmentFiles2 from "./img/ShipmentFiles2.png"

export function FinancialBankArchive() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Remessa{" > "}Arquivos</h3>

                    <div>
                        <p>Ao se clicar no ícone <b>arquivos</b>, é exibida uma tela com todos os arquivos de confirmação de remessa.</p>
                        <img src={ShipmentFiles1} alt="Remessa - Arquivos" />
                    </div>
                    <div>
                        <p>E utilizando o botão do lado direito sobre um arquivo são diponibilizadas as opções <b>download</b>, com a qual se pode baixar um aquivo para o computador local, e <b>deletar</b> para exclusão do arquivo de remessa da lista.</p>
                        <img src={ShipmentFiles2} alt="Remessa - Arquivos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}