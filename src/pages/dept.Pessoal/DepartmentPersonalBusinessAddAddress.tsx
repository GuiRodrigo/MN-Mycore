import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CompanyAddAddress from "./img/CompanyAddAddress.png"

export function DepartmentPersonalBusinessAddAddress() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Empresas{" > "}Adicionar Empresa{" > "}Endereço</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os campos de <b>endereço</b> para iserção das informações inerentes à estes campos.</p>
                        <img src={CompanyAddAddress} alt="Empresa - Adicionar Endereço" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}