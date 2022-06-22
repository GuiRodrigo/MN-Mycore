import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ControlPointSheet1 from "./img/ControlPointSheet1.png"
import ControlPointSheet2 from "./img/ControlPointSheet2.png"

export function DepartmentPersonnelPointSheetControlPoint() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Ponto{" > "}Controle de Ponto</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores e seu respectivo controle de ponto, que é exebido ao clicar-se no ícone de folha de papel, localizado na lateral direita da página.</p>
                        <img src={ControlPointSheet1} alt="Folha de Ponto - Controle de Ponto" />
                    </div>

                    <div>
                        <p>Ao se clicar no ícone pertinente é exibido o relatório com o <b>controle de ponto</b>.</p>
                        <img src={ControlPointSheet2} alt="Folha de Ponto - Controle de Ponto" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}