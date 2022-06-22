import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ZabbixServerConfiguration from "./img/ZabbixServerConfiguration.png"

export function ConfigServerZabbix() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Zabbix</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações do Zabbix. Esta configuração define a integração para monitoramento de fatores de controle dos equipamentos.</p>
                        <img src={ZabbixServerConfiguration} alt="Configuração Servidor - Zabbix" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}