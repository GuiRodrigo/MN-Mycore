import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerPanelClient from "./img/ConfigurationServerPanelClient.png"

export function ConfigServerPanelClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Painel do Cliente</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para o painel do cliente.</p>
                        <img src={ConfigurationServerPanelClient} alt="Configuração Servidor - Painel do Cliente" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}