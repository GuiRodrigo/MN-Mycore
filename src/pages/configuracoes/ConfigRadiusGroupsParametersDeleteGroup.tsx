import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ServerConfigurationParametersGroupDeleteDomain from "./img/ServerConfigurationParametersGroupDeleteDomain.png"

export function ConfigRadiusGroupsParametersDeleteGroup() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Parâmetros de Grupo {">"} Deletar Grupo</h3>

                    <div>
                        <p>Deletar grupo de velocidade Radius. Somente podem ser excluidos grupos de velocidade que não contêm clientes.</p>
                        <img src={ServerConfigurationParametersGroupDeleteDomain} alt="Configuração Servidor - Parametros de Grupo - Deletar - Domínio" />

                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}