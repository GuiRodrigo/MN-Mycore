import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetViewNeti from "./img/DrawnetViewNet.png"

export function DrawnetViewNet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo DrawnetL {">"} Visualizar Rede</h3>

                    <div>
                        <p>Nesta tela visualiza-se o desenho da rede geral do provedor, com os seus vários componentes constituintes.</p>
                        <img src={DrawnetViewNeti} alt="Drawnet - Visualizar Rede" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}