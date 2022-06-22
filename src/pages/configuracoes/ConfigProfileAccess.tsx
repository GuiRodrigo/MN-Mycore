import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerProfileAccess from "./img/ConfigurationServerProfileAccess.png"

export function ConfigProfileAccess() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Perfil de Acesso</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações dos perfis de acesso dos novos usuários para autenticação no provedor.</p>
                        <img src={ConfigurationServerProfileAccess} alt="Configuração Servidor - Perfil de Acesso" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}