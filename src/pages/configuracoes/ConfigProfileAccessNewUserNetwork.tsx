import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerNetworks from "./img/ConfigurationServerNetworks.png"

export function ConfigProfileAccessNewUserNetwork() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Redes</h3>

                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Redes.</p>
                        <img src={ConfigurationServerNetworks} alt="Configuração Servidor - Redes" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}