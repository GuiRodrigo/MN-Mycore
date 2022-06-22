import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerContracts from "./img/ConfigurationServerContracts.png"

export function ConfigProfileAccessNewUserContract() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Contratos</h3>

                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Contratos.</p>
                        <img src={ConfigurationServerContracts} alt="Configuração Servidor - Contratos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}