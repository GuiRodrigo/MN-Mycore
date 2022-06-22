import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SettingsDocuments from "./img/SettingsDocuments.png"

export function DepartmentPersonalSettingsDocuments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Departamento Pessoal{" > "}Configurações{" > "}Documentos</h3>

                    <div>
                        <p>Nesta tela visualiza-se ???.</p>
                        <img src={SettingsDocuments} alt="Configurações - Documentos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}