import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AddEmployeePersonalData from "./img/AddEmployeePersonalData.png"

export function DepartmentPersonalEmployeesAddPersonalData() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Adicionar Colaborador{" > "}Dados Pessoais</h3>

                    <div>
                        <p>Nesta tela, visualiza-se os <b>dados pessoais</b> do colaborador com os campos para o devido preenchimento.</p>
                        <img src={AddEmployeePersonalData} alt="Adicionar Colaborador - Dados Pessoais" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}