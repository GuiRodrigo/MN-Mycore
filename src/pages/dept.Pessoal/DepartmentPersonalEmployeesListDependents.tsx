import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import PersonnelDepartmentCollaboratorListDependents1 from "./img/PersonnelDepartmentCollaboratorListDependents1.png"
import PersonnelDepartmentCollaboratorListDependents2 from "./img/PersonnelDepartmentCollaboratorListDependents2.png"

export function DepartmentPersonalEmployeesListDependents() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Dependentes</h3>

                    <div>
                        <p>Nesta tela, ao se clicar com o botão do lado direito do mouse, visualiza-se um <b>menu</b> com opções de operações que podem ser realizadas com os colaboradores, neste caso, a visualização dos <b>dependentes</b> do colaborador.</p>
                        <img src={PersonnelDepartmentCollaboratorListDependents1} alt="Departamento Pessoal - Lista Colaborador - Dependentes" />
                    </div>
                    <div>
                        <p>Ao se visualizar as opções de menu, seleciona-se a opção <b>dependentes</b> para ver a tela abaixo.</p>
                        <img src={PersonnelDepartmentCollaboratorListDependents2} alt="Departamento Pessoal - Lista Colaborador - Dependentes" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}