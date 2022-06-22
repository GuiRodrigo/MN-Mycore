import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerApplicationDevice from "./img/ConfigurationServerApplicationDevice.png"

export function ConfigApplicationAppliances() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Aplicativo{" > "}Aparelho</h3>

                    <div>
                        <p>Visualiza-se a listagem com os aparelhos celulares cadastrados e sincronizados com o sistema.</p>
                        <img src={ConfigurationServerApplicationDevice} alt="Configuração Servidor - Aplicativo - Aparelho" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}