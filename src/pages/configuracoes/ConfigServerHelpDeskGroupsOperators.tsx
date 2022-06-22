import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerHelpDeskGroupOperators from "./img/ConfigurationServerHelpDeskGroupOperators.png"

export function ConfigServerHelpDeskGroupsOperators() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Grupos/Operadores</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações para o módulo do Help Desk, na aba de <b>Grupo/Operadores</b>. Define-se os usuários que receberão os chamados para atendimento do suporte.</p>
                        <img src={ConfigurationServerHelpDeskGroupOperators} alt="Configuração Servidor - Hep Desk - Grupo/Operadores" />

                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}