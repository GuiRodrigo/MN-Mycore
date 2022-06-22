import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerHepDeskTypeService from "./img/ConfigurationServerHepDeskTypeService.png"

export function ConfigServerHelpDeskServiceType() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Tipo de Serviço</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para o módulo do Help Desk, na aba <b>Tipo de Serviço</b>. Essa função visa criar os tipos de suporte que ficarão disponíveis no Call Center, para abertura de chamados.</p>
                        <img src={ConfigurationServerHepDeskTypeService} alt="Configuração Servidor - Hep Desk - Tipo de Serviço" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}