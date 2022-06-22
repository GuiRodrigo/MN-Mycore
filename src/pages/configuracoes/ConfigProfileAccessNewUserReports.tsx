import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerReports1 from "./img/ConfigurationServerReports1.png"
import ConfigurationServerReports2 from "./img/ConfigurationServerReports2.png"

export function ConfigProfileAccessNewUserReports() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <div>
                        <h3>Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Relatórios</h3>

                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Relatórios.</p>
                        <img src={ConfigurationServerReports1} alt="Configuração Servidor - Relatórios" />
                    </div>
                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Relatórios (Continuação).</p>
                        <img src={ConfigurationServerReports2} alt="Configuração Servidor - Relatórios" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}