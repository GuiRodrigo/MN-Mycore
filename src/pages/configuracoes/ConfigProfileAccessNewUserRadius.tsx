import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import RadiusServerConfiguration from "./img/RadiusServerConfiguration.png"

export function ConfigProfileAccessNewUserRadius() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações {"> "}Perfil de Acesso {"> "}Novo Usuário {"> "}Radius</h3>

                    <div>
                        <p>Opções para liberação ou restrição das configurações do usuário no módulo do Radius.</p>
                        <img src={RadiusServerConfiguration} alt="Configuração Servidor - Radius" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}