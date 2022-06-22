import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import eSocialServerConfiguration from "./img/eSocialServerConfiguration.png"

export function ConfigProfileAccessNewUserSocial() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}eSocial</h3>

                    <div>
                        <p>Opções para liberação ou restrição das configurações do usuário para acesso ao e-Social.</p>
                        <img src={eSocialServerConfiguration} alt="Configuração Servidor - eSocial" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}