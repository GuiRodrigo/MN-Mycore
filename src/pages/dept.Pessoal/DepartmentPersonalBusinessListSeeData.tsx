import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CompanyListCompany from "./img/CompanyListCompany.png"
import CompanyViewCompany1 from "./img/CompanyViewCompany1.png"
import CompanyViewCompany3 from "./img/CompanyViewCompany3.png"
import CompanyViewCompany4 from "./img/CompanyViewCompany4.png"
import CompanyViewCompany5 from "./img/CompanyViewCompany5.png"

export function DepartmentPersonalBusinessListSeeData() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Empresas{" > "}Listar Empresa{" > "}Ver Dados</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os dados da empresa para efeito de conferência ou análise. Neste modo não é possível modificar, acrescentar ou remover dados dos campos.</p>
                        <img src={CompanyListCompany} alt="Empresa - Listar Empresa" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, visualiza-se um menu com a opção de <b>ver</b> os dados da empresa.</p>
                        <img src={CompanyViewCompany1} alt="Empresa - Ver Empresa" />
                        <img src={CompanyViewCompany3} alt="Empresa - Ver Empresa" />
                        <img src={CompanyViewCompany4} alt="Empresa - Ver Empresa" />
                        <img src={CompanyViewCompany5} alt="Empresa - Ver Empresa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}