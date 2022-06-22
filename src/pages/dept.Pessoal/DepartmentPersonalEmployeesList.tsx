import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListEmployeesPng from "./img/ListEmployees.png"

export function DepartmentPersonalEmployeesList() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal {">"} Lista Colaborador</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores que foram inseridos no banco de dados do MyCore.</p>
                        <img src={ListEmployeesPng} alt="Departamento Pessoal - Lista Colaborador" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}