import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetDrawNetConfigure1 from "./img/DrawnetDrawNetConfigure1.png"
import DrawnetDrawNetConfigure2 from "./img/DrawnetDrawNetConfigure2.png"
import DrawnetDrawNetConfigure3 from "./img/DrawnetDrawNetConfigure3.png"
import DrawnetDrawNetConfigure4 from "./img/DrawnetDrawNetConfigure4.png"

export function DrawnetDrawingNetworkConfiguration() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Desenhar Rede{" > "}Configurar</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o modo de configuração módulo de desenho do Drawnet.</p>
                        <img src={DrawnetDrawNetConfigure1} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetConfigure2} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetConfigure3} alt="Drawnet - Desenhar Rede - Configurar" />
                        <img src={DrawnetDrawNetConfigure4} alt="Drawnet - Desenhar Rede - Configurar" />
                    </div>



                </div>
            </div >
            <Footer />
        </div >
    )
}