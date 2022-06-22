import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsSyndicate from "./img/SettingsSyndicate.png"

export function DepartmentPersonalSettingsUnion() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Sindicatos</h3>

                    <div>
                        <p>Nesta tela estão disponibilizados os campos necessários para o cadastramento de <b>sindicatos</b>.</p>
                        <img src={SettingsSyndicate} alt="Configurações - Sindicatos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}