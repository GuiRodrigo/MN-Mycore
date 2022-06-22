import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerContractsParameters1 from "./img/ConfigurationServerContractsParameters1.png"
import ConfigurationServerContractsParameters2 from "./img/ConfigurationServerContractsParameters2.png"
import ConfigurationServerContractsParameters3 from "./img/ConfigurationServerContractsParameters3.png"

export function ConfigContractsOptions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Contratos{" > "}Opções</h3>
                    <div>
                        <p>Nas telas abaixo são exibidas as opções disponíveis na janela dos contratos onde se pode:</p>
                        <ul >
                            <li>Deletar</li>
                            <li>Desativar</li>
                            <li>Ativar</li>
                        </ul>
                    </div>

                    <div>
                        <img src={ConfigurationServerContractsParameters1} alt="Configuração Servidor - Contratos - Parâmetros 1" />
                    </div>
                    <div>
                        <img src={ConfigurationServerContractsParameters2} alt="Configuração Servidor - Contratos - Parâmetros 2" />
                    </div>
                    <div>
                        <img src={ConfigurationServerContractsParameters3} alt="Configuração Servidor - Contratos - Parâmetros 2" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}