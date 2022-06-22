import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsAddDepartment from "./img/SettingsAddDepartment.png"

export function DepartmentPersonnelSettingsAddDepartment() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Adicionar Departamento</h3>

                    <div>
                        <p>Nesta tela estão disponibilizados os campos necessários a inclusão de um novo <b>departamento</b>.</p>
                        <img src={SettingsAddDepartment} alt="Configurações - Adicionar Departamento" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}