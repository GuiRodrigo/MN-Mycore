import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListContributorEdit from "./img/ListContributorEdit.png"
import ListContributorEditData from "./img/ListContributorEditData.png"

export function DepartmentPersonalEmployeesListEdit() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Editar</h3>

                    <div>
                        <p>Nesta tela, ao se clicar com o botão do lado direito do mouse, visualiza-se um <b>menu</b> com opções de operações que podem ser realizadas com os colaboradores, neste caso, a <b>edição</b> das informações do colaborador.</p>
                        <img src={ListContributorEdit} alt="Lista Colaborador - Editar" />
                    </div>
                    <div>
                        <p>Após selecionar a opção de <b>editar</b> no menu, os dados do colaborador ficam disponíveis para eventuais modificações.</p>
                        <img src={ListContributorEditData} alt="Lista Colaborador - Editar Dados" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}