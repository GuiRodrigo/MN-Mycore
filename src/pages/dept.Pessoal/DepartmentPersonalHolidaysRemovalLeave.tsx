import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import Removal from "./img/Removal.png"

export function DepartmentPersonalHolidaysRemovalLeave() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Férias e Afastamento{" > "}Afastamento</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os campos necessários ao cadastramento do <b>afastamento</b> do colaborador em casos de requisição médica.</p>
                        <img src={Removal} alt="Afastamento" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}