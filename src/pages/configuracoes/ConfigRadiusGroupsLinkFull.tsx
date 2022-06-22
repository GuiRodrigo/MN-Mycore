import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsLinkFull from "./img/ConfigurationServerRadiusGroupsLinkFull.png"

export function ConfigRadiusGroupsLinkFull() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Link Full</h3>

                    <div>
                        <p>Campos necessários ao preenchimento das configurações para habilitar horários e redes relacionadas às velocidades do acesso.</p>
                        <img src={ConfigurationServerRadiusGroupsLinkFull} alt="Configuração Servidor - Radius e Grupos - Link Full" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}