import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsParametersGroup from "./img/ConfigurationServerRadiusGroupsParametersGroup.png"

export function ConfigRadiusGroupsParameters() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Parâmetros de Grupo</h3>

                    <div>
                        <p>Campos com os parâmetros do Radius relacionados ao grupo.</p>
                        <img src={ConfigurationServerRadiusGroupsParametersGroup} alt="Configuração Servidor - Radius e Grupos - Parâmetros de Grupo" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}