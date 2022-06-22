import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsReferences from "./img/SettingsReferences.png"

export function DepartmentPersonalSettingsReferences() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Referências</h3>

                    <div>
                        <p>Nesta tela são visualizadas as faixas salariais que são <b>referência</b> para retenção de tributos incidentes sobre os salários.</p>
                        <img src={SettingsReferences} alt="Configurações - Referências" />
                    </div>



                </div>
            </div >
            <Footer />
        </div >
    )
}