import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ServerConfigurationDefaultSettings from "./img/ServerConfigurationDefaultSettings.png"

export function ConfigServerSettingsDefault() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Definições Padrão</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as definições que devem ser preenchidas para se tornar o padrão de uso para o ambiente.</p>
                        <img src={ServerConfigurationDefaultSettings} alt="Configuração Servidor - Definições Padrão" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >

    )
}