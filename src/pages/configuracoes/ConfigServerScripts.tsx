import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ServerConfigurationScripts from "./img/ServerConfigurationScripts.png"
import ConfigurationServerScriptsModel from "./img/ConfigurationServerScriptsModel.png"
import ServerConfigurationScriptsNew from "./img/ServerConfigurationScriptsNew.png"

export function ConfigServerScripts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Scripts </h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para criação de Scripts.</p>
                        <img src={ServerConfigurationScripts} alt="Configuração Servidor - Scripts" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre um item dentre os scripts criados abre-se o <b>modelo do script</b> que foi criado.</p>
                        <img src={ConfigurationServerScriptsModel} alt="Configuração Servidor - Scripts Modelo" />
                    </div>
                    <div>
                        <p>Ao se clicar no botão <b>novo script</b> é aberta uma janela para criação de um script.</p>
                        <img src={ServerConfigurationScriptsNew} alt="Configuração Servidor - Scripts Novo" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}