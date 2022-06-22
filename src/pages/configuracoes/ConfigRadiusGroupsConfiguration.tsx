import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsNewGroup from "./img/ConfigurationServerRadiusGroupsNewGroup.png"

export function ConfigRadiusGroupsConfiguration() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Novo Grupo</h3>

                    <div>
                        <p>Configuração dos campos necessários ao preenchimento das informações para composição de um novo grupo Radius.</p>
                        <img src={ConfigurationServerRadiusGroupsNewGroup} alt="Configuração Servidor - Radius e Grupos - Novo Grupo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}