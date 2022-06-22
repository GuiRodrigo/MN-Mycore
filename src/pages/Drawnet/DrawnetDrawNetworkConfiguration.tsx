import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetDrawNetworkConfiguration1 from "./img/DrawnetDrawNetworkConfiguration1.png"
import DrawnetDrawNetworkConfiguration2 from "./img/DrawnetDrawNetworkConfiguration2.png"
import DrawnetDrawNetworkConfiguration3 from "./img/DrawnetDrawNetworkConfiguration3.png"
import DrawnetDrawNetworkConfiguration4 from "./img/DrawnetDrawNetworkConfiguration4.png"

export function DrawnetDrawNetworkConfiguration() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Desenhar Rede{" > "}Configurar</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o modo de configuração módulo de desenho do Drawnet.</p>
                        <img src={DrawnetDrawNetworkConfiguration1} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetworkConfiguration2} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetworkConfiguration3} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetworkConfiguration4} alt="Drawnet - Desenhar Rede - Configurar" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}