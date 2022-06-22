import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import PointSheet from "./img/PointSheet.png"
import GeneratePointSheet from "./img/GeneratePointSheet.png"

export function PersonnelDepartmentTimeSheet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Departamento Pessoal{" > "}Folha de Ponto</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista de colaboradores e suas respectivas escalas de trabalho. Ao selecionar-se um colaborador e clicar no botão <b>Gerar Folha de Ponto</b> o sistema gera a folha e disponibiliza a sua impressão por meio do ícone de uma impressora localizado no canto superior esquerdo da página.</p>
                        <img src={PointSheet} alt="Folha de Ponto" />
                    </div>

                    <div>
                        <p>Ao se clicar no botão <b>Gerar Folha de Ponto</b> a folha é exibida, conforme abaixo:</p>
                        <img src={GeneratePointSheet} alt="Folha de Ponto - Gerar Folha de Ponto" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}