import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroups from "./img/ConfigurationServerRadiusGroups.png"

export function ConfigRadiusGroups() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Grupos {"&"} Radius</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se os parâmetros que definirão as configurações dos grupos/planos de
                            velocidade:</p>
                        <ul >
                            <li>Parâmetros de Download/Upload</li>
                            <li>Velocidade Acelerada</li>
                            <li>Burst Limit</li>
                            <li>Velocidade Reduzida</li>
                            <li>LinkFull</li>
                            <li>Mikrotik Export</li>
                        </ul>

                        <img src={ConfigurationServerRadiusGroups} alt="Configuração Servidor - Radius e Grupos" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}