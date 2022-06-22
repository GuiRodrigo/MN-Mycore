import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SheetPointImportPoint from "./img/SheetPointImportPoint.png"

export function DepartmentPersonnelPointSheetImport() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Ponto{" > "}Importar Ponto</h3>

                    <div>
                        <p>Nesta tela é disponibilizada a funcionalidade de <b>importar</b> o ponto de um arquivo, onde as marcações foram apontadas.</p>
                        <img src={SheetPointImportPoint} alt="Folha de Ponto - Importar Ponto" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}