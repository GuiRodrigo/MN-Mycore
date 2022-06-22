import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import WebSMSServerConfiguration from "./img/WebSMSServerConfiguration.png"

export function ConfigProfileAccessNewUserWebSMS() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações {"> "}Perfil de Acesso {"> "}Novo Usuário {"> "}WebSMS</h3>

                    <div>
                        <p>Opções para liberação ou restrição das configurações do usuário para acesso ao módulo WebSMS.</p>
                        <img src={WebSMSServerConfiguration} alt="Configuração Servidor - WebSMS" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}