import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetDrawNetworkDrawShapes from "./img/DrawnetDrawNetworkDrawShapes.png"

export function DrawnetDrawNetworkShapes() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Desenhar Rede{" > "}Desenhar Formas</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o modo de desenhar formas, com o qual se pode desenhar figuras geométricas na rede, para demarcação de áreas no mapa.</p>
                        <img src={DrawnetDrawNetworkDrawShapes} alt="Drawnet - Desenhar Rede - Desenhar Formas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )

}