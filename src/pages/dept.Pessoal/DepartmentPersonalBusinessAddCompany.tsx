import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CompanyListCompany from "./img/CompanyListCompany.png"
import CompanyAddCompany from "./img/CompanyAddCompany.png"

export function DepartmentPersonalBusinessAddCompany() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Empresas{" > "}Adicionar Empresa{" > "}Empresa</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os campos de <b>empresa</b> para iserção das informações inerentes à estes campos.</p>
                        <img src={CompanyListCompany} alt="Empresa - Adicionar Empresa" />
                        <img src={CompanyAddCompany} alt="Empresa - Adicionar Empresa" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}