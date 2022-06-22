import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsManageShift from "./img/SettingsManageShift.png"

export function DepartmentPersonnelSettingsManageShifts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Gerenciar Turnos</h3>

                    <div>
                        <p>Nesta tela é disponibilizada a funcionalidade de <b>gerenciar turnos</b> e suas exceções por meio da definição de folgas, férias, afastamentos.</p>
                        <img src={SettingsManageShift} alt="Configurações - Gerenciar Turnos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}