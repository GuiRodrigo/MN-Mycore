import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ListEmployeesUploadArchive from "./img/ListEmployeesUploadArchive.png"

export function DepartmentPersonalEmployeesListUploadArchive() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Departamento Pessoal{" > "}Lista Colaborador{" > "}Upload de Arquivo</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a opção de se fazer o upload de um arquivo que fique anexo ao colaborador, quando utiliza-se o ícone da seta para cima, localizado no lado direito da tela.</p>
                        <img src={ListEmployeesUploadArchive} alt="Lista Colaborador - Upload de Arquivo" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}