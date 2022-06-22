import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SICIServerConfiguration from "./img/SICIServerConfiguration.png"

export function ConfigServerSICI() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}SICI</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para o SICI.</p>
                        <img src={SICIServerConfiguration} alt="Configuração Servidor - SICI" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}