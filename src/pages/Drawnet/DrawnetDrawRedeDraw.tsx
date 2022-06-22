import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetDrawNet from "./img/DrawnetDrawNet.png"

export function DrawnetDrawRedeDraw() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Desenhar Rede</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o modo de desenhar uma rede, com os seus vários componentes constituintes.</p>
                        <img src={DrawnetDrawNet} alt="Drawnet - Desenhar Rede" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}