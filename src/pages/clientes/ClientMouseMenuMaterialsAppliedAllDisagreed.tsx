import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuLawMouseContractsDisagreed from "./img/ClientsMenuLawMouseContractsDisagreed.png"
import ClientsMenuLawMouseContractsPrinting from "./img/ClientsMenuLawMouseContractsPrinting.png"

export function ClientMouseMenuMaterialsAppliedAllDisagreed() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Contratos{" > "}Discordou</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizados os contratos onde não houve concordância com o cliente.</p>
                        <img src={ClientsMenuLawMouseContractsDisagreed} alt="Clientes - Menu lado direito do mouse - Contratos - Discordou" ></img>
                    </div>
                    <div>
                        <p>Na tela é possível selecionar o ícone de visualização do contrato e da impressora para que se visualize o contrato podendo-se imprimí-lo</p>
                        <img src={ClientsMenuLawMouseContractsPrinting} alt="Clientes - Menu lado direito do mouse - Contratos - Impressão" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}