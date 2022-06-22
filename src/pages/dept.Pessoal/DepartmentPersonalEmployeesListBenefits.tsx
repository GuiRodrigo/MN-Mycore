import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListCollaboratorBenefits1 from "./img/ListCollaboratorBenefits1.png"
import ListCollaboratorBenefits2 from "./img/ListCollaboratorBenefits2.png"

export function DepartmentPersonalEmployeesListBenefits() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Benefícios</h3>

                    <div>
                        <p>Nesta tela, ao se clicar com o botão do lado direito do mouse, visualiza-se um <b>menu</b> com opções de operações que podem ser realizadas com os colaboradores, neste caso, a visualização dos <b>benefícios</b> do colaborador.</p>
                        <img src={ListCollaboratorBenefits1} alt="Lista Colaborador - Benefícios" />
                    </div>
                    <div>
                        <p>Ao se visualizar as opções de menu, seleciona-se a opção <b>benefícios</b> para ver a tela abaixo.</p>
                        <img src={ListCollaboratorBenefits2} alt="Lista Colaborador - Benefícios" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}