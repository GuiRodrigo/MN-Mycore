import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerHelpDesk from "./img/ConfigurationServerHelpDesk.png"

export function ConfigProfileAccessNewUserHelpDesk() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Help Desk</h3>

                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Help Desk.</p>
                        <img src={ConfigurationServerHelpDesk} alt="Configuração Servidor - Help Desk" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}