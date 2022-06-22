import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsPoolRadius from "./img/ConfigurationServerRadiusGroupsPoolRadius.png"

export function ConfigRadiusGroupsPoolRadius() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Pool Radius</h3>

                    <div>
                        <p>Campos necessários à criação do range de IP´s relacionados aos domínios Radius.</p>
                        <img src={ConfigurationServerRadiusGroupsPoolRadius} alt="Configuração Servidor - Radius e Grupos - Pool Radius" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}