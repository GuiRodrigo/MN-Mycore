import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerProfileAccessAdministratorClient from "./img/ConfigurationServerProfileAccessAdministratorClient.png"

export function ConfigProfileAccessNewUserAdministradorCliente() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Administrador/Cliente</h3>

                    <div>
                        <p>Opções que devem ser marcadas para habilitar o perfil do novo usuário com característica de administrador ou cliente.</p>

                        <img src={ConfigurationServerProfileAccessAdministratorClient} alt="Configuração Servidor - Perfil de Acesso - Administrador/Cliente" />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}