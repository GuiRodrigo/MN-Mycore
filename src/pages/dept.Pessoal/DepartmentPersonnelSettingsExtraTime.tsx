import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ExtraTimeSettings from "./img/ExtraTimeSettings.png"

export function DepartmentPersonnelSettingsExtraTime() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Horas Extras</h3>

                    <div>
                        <p>Nesta tela é disponibilizada a funcionalidade de cadastramento de <b>horas extras</b> no sistema para administração de banco de horas.</p>
                        <img src={ExtraTimeSettings} alt="Configurações - Horas Extras" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}