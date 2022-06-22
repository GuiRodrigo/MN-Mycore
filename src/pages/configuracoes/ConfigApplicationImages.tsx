import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsServerAppImages from "./img/SettingsServerAppImages.png"

export function ConfigApplicationImages() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Aplicativo{" > "}Imagens</h3>

                    <div>
                        <p>Campos contendo uma lista onde podem ser realizados uplods de imagens para carga no aplicativo utilizado pelo celular.</p>
                        <img src={SettingsServerAppImages} alt="Configuração Servidor - Aplicativo - Imagens" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}