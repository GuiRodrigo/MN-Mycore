import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AddContributorAddress from "./img/AddContributorAddress.png"

export function DepartmentPersonalEmployeesAddAddressContact() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Adicionar Colaborador{" > "}Endereço</h3>

                    <div>
                        <p>Nesta tela, visualiza-se as informações sobre o <b>endereço</b> do colaborador com os campos para o devido preenchimento.</p>
                        <img src={AddContributorAddress} alt="Adicionar Colaborador - Endereço" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}