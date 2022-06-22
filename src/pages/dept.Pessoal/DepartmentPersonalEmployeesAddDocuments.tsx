import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AddContributorDocuments from "./img/AddContributorDocuments.png"

export function DepartmentPersonalEmployeesAddDocuments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Adicionar Colaborador{" > "}Documentos</h3>

                    <div>
                        <p>Nesta tela, visualiza-se as informações sobre os <b>documentos</b> do colaborador com os campos para o devido preenchimento.</p>
                        <img src={AddContributorDocuments} alt="Adicionar Colaborador - Documentos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}