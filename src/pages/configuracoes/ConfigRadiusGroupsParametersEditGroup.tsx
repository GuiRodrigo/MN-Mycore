import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsEditGroup from "./img/ConfigurationServerRadiusGroupsEditGroup.png"

export function ConfigRadiusGroupsParametersEditGroup() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Parâmetros de Grupo {">"} Editar Grupo</h3>

                    <div>
                        <p>Campos contendo os dados do grupos de velocidade que podem ser alterados em eventuais necessidades. O nome do grupo não pode conter caracteres especiais ou espaços</p>
                        <img src={ConfigurationServerRadiusGroupsEditGroup} alt="Configuração Servidor - Radius e Grupos - Editar Grupo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}