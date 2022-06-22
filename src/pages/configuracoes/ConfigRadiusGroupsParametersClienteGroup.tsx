import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsClientsGroup from "./img/ConfigurationServerRadiusGroupsClientsGroup.png"

export function ConfigRadiusGroupsParametersClienteGroup() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Parâmetros de Grupo{" > "}Clientes no Grupo</h3>

                    <div>
                        <p>Lista dos clientes que estão relacionados com os grupos de velocidade.</p>
                        <img src={ConfigurationServerRadiusGroupsClientsGroup} alt="Configuração Servidor - Radius e Grupos - Clientes no Grupo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}