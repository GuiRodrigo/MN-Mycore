import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerHelpDeskReasonClosing from "./img/ConfigurationServerHelpDeskReasonClosing.png"

export function ConfigServerHelpDeskReasonClosing() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Motivo de Fechamento</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para o módulo do Help Desk, na aba de <b>Motivo de Fechamento</b>. Essa função é configurada para permitir a criação de relatórios evidenciando os tipos de chamdos atendidos e o motivo do fechamento.</p>
                        <img src={ConfigurationServerHelpDeskReasonClosing} alt="Configuração Servidor - Hep Desk - Motivo de Fechamento" />

                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}