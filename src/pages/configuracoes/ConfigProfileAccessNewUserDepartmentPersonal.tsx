import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerDepartmentPersonal from "./img/ConfigurationServerDepartmentPersonal.png"

export function ConfigProfileAccessNewUserDepartmentPersonal() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Departamento Pessoal</h3>

                    <div>
                        <p>Opções para liberação ou restrição das configurações do usuário para acesso ao módulo do Departamento Pessoal.</p>
                        <img src={ConfigurationServerDepartmentPersonal} alt="Configuração Servidor - Departamento Pessoal" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}