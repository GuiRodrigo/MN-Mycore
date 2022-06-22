import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SalarySheet from "./img/SalarySheet.png"

export function DepartmentPersonnelPayment13th() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Pagamento{" > "}13o. Salário</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores que fazem jus ao <b>13. salário</b>.</p>
                        <img src={SalarySheet} alt="Folha - 13o. Salário" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}