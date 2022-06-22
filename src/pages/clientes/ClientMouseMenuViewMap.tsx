import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseViewMap from "./img/ClientsMenuRightMouseViewMap.png"

export function ClienteMouseMenuViewMap() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse {">"} Visualizar {">"} Mapa</h3>

                    <div>
                        <p>Na tela, abaixo, é visualizado o mapa com a geolocalização do cliente.</p>
                        <img src={ClientsMenuRightMouseViewMap} alt="Clientes - Menu lado direito do mouse - Visualizar Mapa" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}