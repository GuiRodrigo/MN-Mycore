import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerProfileAccessNewUser from "./img/ConfigurationServerProfileAccessNewUser.png"

export function ConfigProfileAccessNewUserLogin() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Login</h3>

                    <div>
                        <p>Campos para preenchimento das informações do perfil de acesso do novo usuário, assim como, as opções de liberação ou restrição desse perfil.</p>
                        <img src={ConfigurationServerProfileAccessNewUser} alt="Configuração Servidor - Perfil de Acesso - Novo Usuário" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}