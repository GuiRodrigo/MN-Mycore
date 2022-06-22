import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SheetPointClosing from "./img/SheetPointClosing.png"

export function DepartmentPersonnelPointSheetClosingPoint() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Ponto{" > "}Fechamento do Ponto</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores que realizaram o <b>fechamento do ponto</b>.</p>
                        <img src={SheetPointClosing} alt="Folha de Ponto - Fechamento do Ponto" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}