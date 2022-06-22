import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListEmployeeLinkScale1 from "./img/ListEmployeeLinkScale1.png"
import ListEmployeeLinkScale2 from "./img/ListEmployeeLinkScale2.png"

export function DepartmentPersonalEmployeesListLinkScala() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Vincular Escala</h3>

                    <div>
                        <p>Nesta tela, ao se clicar com o botão do lado direito do mouse, visualiza-se um <b>menu</b> com opções de operações que podem ser realizadas com os colaboradores, neste caso, a <b>vinculação de escala</b> ao colaborador.</p>
                        <img src={ListEmployeeLinkScale1} alt="Lista Colaborador - Vincular Escala" />
                    </div>
                    <div>
                        <p>Ao se visualizar as opções de menu, seleciona-se a opção <b>vincular escala</b> para ver a tela abaixo.</p>
                        <img src={ListEmployeeLinkScale2} alt="Lista Colaborador - Vinculação de Escala" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}