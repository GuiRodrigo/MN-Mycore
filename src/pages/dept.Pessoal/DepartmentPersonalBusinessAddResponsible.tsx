import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CompanyAddResponsible from "./img/CompanyAddResponsible.png"

export function DepartmentPersonalBusinessAddResponsible() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Empresas{" > "}Adicionar Empresa{" > "}Responsável</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os campos de <b>responsável</b> para iserção das informações inerentes à estes campos.</p>
                        <img src={CompanyAddResponsible} alt="Empresa - Adicionar Responsável" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}