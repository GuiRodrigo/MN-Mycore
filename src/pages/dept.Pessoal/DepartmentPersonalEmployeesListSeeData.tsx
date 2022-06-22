import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListContributorViewData from "./img/ListContributorViewData.png"
import ListEmployeeMenu from "./img/ListEmployeeMenu.png"
import ListEmployeeViewData from "./img/ListEmployeeViewData.png"

export function DepartmentPersonalEmployeesListSeeData() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Ver Dados</h3>

                    <div>
                        <p>Nesta tela, ao se clicar com o botão do lado direito do mouse, visualiza-se um <b>menu</b> com opções de operações que podem ser realizadas com os colaboradores, neste caso, ver os dados do colaborador.</p>
                        <img src={ListEmployeeMenu} alt="Lista Colaborador - Menu" />
                    </div>
                    <div>
                        <p>Ao se visualizar as opções de menu, seleciona-se a opção <b>Ver Dados</b>.</p>
                        <img src={ListEmployeeViewData} alt="Lista Colaborador - Ver Dados" />
                    </div>
                    <div>
                        <p>Todas as informações pertinentes do colaborador serão exibidas nas telas e suas respectivas <b>abas</b>.</p>
                        <img src={ListContributorViewData} alt="Lista Colaborador - Visualiza Dados" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}