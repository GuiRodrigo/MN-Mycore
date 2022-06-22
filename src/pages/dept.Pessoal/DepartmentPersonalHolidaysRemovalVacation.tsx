import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import VacationCreateHolidays from "./img/VacationCreateHolidays.png"

export function DepartmentPersonalHolidaysRemovalVacation() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Férias e Afastamento{" > "}Criar Férias</h3>

                    <div>
                        <p>Nesta tela, visualiza-se  o botão de <b>cadastrar</b> férias para criar um período em que o colaborador fizer jus às férias.</p>
                        <img src={VacationCreateHolidays} alt="Férias - Criar Férias" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}