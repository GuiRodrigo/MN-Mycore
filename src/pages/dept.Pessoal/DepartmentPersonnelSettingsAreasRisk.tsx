import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsAreasRisk from "./img/SettingsAreasRisk.png"

export function DepartmentPersonnelSettingsAreasRisk() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Áreas de Risco</h3>

                    <div>
                        <p>Nesta tela estão disponibilizados os campos necessários ao gerenciamento de <b>áreas de risco</b>.</p>
                        <img src={SettingsAreasRisk} alt="Configurações - Áreas de Risco" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}