import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsAddShift from "./img/SettingsAddShift.png"

export function DepartmentPersonalSettingsAddShift() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Adicionar Turno</h3>

                    <div>
                        <p>Nesta tela esão disponibilizados os campos necessários à inclusão de um novo <b>turno</b> de trabalho.</p>
                        <img src={SettingsAddShift} alt="Configurações - Adicionar Turno" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}