import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AddContributorOtherData from "./img/AddContributorOtherData.png"

export function DepartmentPersonalEmployeesAddOthers() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Adicionar Colaborador{" > "}Outros Dados</h3>

                    <div>
                        <p>Nesta tela, visualiza-se as informações sobre o <b>outros dados</b> do colaborador com os campos para o devido preenchimento.</p>
                        <img src={AddContributorOtherData} alt="Adicionar Colaborador - Outros Dados" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}