import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DepartmentPersonnelMainScreen from "./img/DepartmentPersonnelMainScreen.png"

export function DepartmentPersonal() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo RH {">"} Principal</h3>

                    <div>
                        <p>O módulo de Departamento Pessoal foi desenvolvido para gerenciar os recursos humanos da empresa, proporcionando o controle das funções ligadas ao RH.</p>
                        <p>No módulo de Depto. Pessoal, pode-se:</p>

                        <ul>

                            <li>Gerir funções relacionadas aos colaboradores;</li>
                            <li>Definir parametros para a empresa;</li>
                            <li>Gerir a folha de pagamento;</li>
                            <li>Cadastrar e gerir férias e afastamento;</li>
                            <li>Gerir a folha de ponto;</li>
                            <li>Configurar outras funções de RH;</li>

                        </ul>

                        <p>As opções estão dispostas conforme a árvore de menus apresentada abaixo:</p>
                        <img src={DepartmentPersonnelMainScreen} alt="Departamento Pessoal - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}