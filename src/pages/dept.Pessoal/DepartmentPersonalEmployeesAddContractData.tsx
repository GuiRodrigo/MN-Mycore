import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AddEmployeeContractData from "./img/AddEmployeeContractData.png"

export function DepartmentPersonalEmployeesAddContractData() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Adicionar Colaborador{" > "}Dados Contratuais</h3>

                    <div>
                        <p>Nesta tela, visualiza-se as informações sobre o <b>dados contratuais</b> do colaborador com os campos para o devido preenchimento.</p>
                        <img src={AddEmployeeContractData} alt="Adicionar Colaborador - Dados Contratuais" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}