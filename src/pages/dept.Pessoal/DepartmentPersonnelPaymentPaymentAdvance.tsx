import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AdvanceSheet from "./img/AdvanceSheet.png"

export function DepartmentPersonnelPaymentPaymentAdvance() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Pagamento{" > "}Adiantamento</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores que fizeram requisição do <b>adiantamento</b> de salário.</p>
                        <img src={AdvanceSheet} alt="Folha - Adiantamento" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}