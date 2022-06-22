import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NF21GenerateFiles from "./img/NF21GenerateFiles.png"

export function FinancialNFGenerateArchives() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Gerar Arquivos</h3>

                    <div>
                        <p>Nesta tela é apresentado o botão <b>gerar arquivos</b>, que ao ser pressionado, gera arquivos de validação das NF´s 21.</p>
                        <img src={NF21GenerateFiles} alt="NF 21 - Gerar Arquivos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}