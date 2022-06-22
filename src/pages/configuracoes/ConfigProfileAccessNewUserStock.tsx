import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerStock from "./img/ConfigurationServerStock.png"

export function ConfigProfileAccessNewUserStock() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Estoque</h3>

                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo de Estoque.</p>
                        <img src={ConfigurationServerStock} alt="Configuração Servidor - Estoque" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}