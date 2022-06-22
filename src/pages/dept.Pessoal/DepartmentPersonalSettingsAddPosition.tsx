import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsAddPosition from "./img/SettingsAddPosition.png"

export function DepartmentPersonalSettingsAddPosition() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Adicionar Cargo</h3>

                    <div>
                        <p>Nesta tela estão localizados os campos necessários à inclusão de um novo <b>cargo</b>.</p>
                        <img src={SettingsAddPosition} alt="Configurações - Adicionar Cargo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}