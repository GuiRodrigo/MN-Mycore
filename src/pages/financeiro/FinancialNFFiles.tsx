import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NF21File from "./img/NF21File.png"

export function FinancialNFFiles() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Arquivos</h3>

                    <div>
                        <p>Nesta tela são visualizados os <b>arquivos</b> de notas fiscais 21, sobre os quais é possível fazer download para o microcomputador local, ou ainda excluir um ou mais arquivos.</p>
                        <img src={NF21File} alt="NF 21 - Arquivo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}