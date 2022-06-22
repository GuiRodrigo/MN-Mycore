import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import WebMailServerConfiguration from "./img/WebMailServerConfiguration.png"

export function ConfigProfileAccessNewUserWebMail() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}WebMail</h3>

                    <div>
                        <p>Opções para liberação ou restrição das configurações do usuário para acesso ao módulo WebMail.</p>
                        <img src={WebMailServerConfiguration} alt="Configuração Servidor - WebMail" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}