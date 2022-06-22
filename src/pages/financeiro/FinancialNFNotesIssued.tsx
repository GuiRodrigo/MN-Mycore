import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NotesIssued from "./img/NotesIssued.png"
import NF21GenerateFiles1 from "./img/NF21GenerateFiles1.png"
import NF21GenerateFiles2 from "./img/NF21GenerateFiles2.png"
import NF21GenerateFiles3 from "./img/NF21GenerateFiles3.png"

export function FinancialNFNotesIssued() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Notas Emitidas</h3>

                    <div>
                        <p>Nesta tela está disponibilizado o botão <b>notas emitidas</b>, que uma vez pressionado, listará os registros das NF´s 21 para um determinado período, por empresa.</p>
                        <img src={NotesIssued} alt="Notas Emitidas" />
                    </div>
                    <div>
                        <p>Ao selecionar o ícone da impressora sobre uma NF emitida, é possível visualizá-la.</p>
                        <img src={NF21GenerateFiles1} alt="NF 21 - Gerar Arquivos" />
                    </div>
                    <div>
                        <p>Ao selecionar o ícone de atualização de uma NF emitida, é possível revisar informações na nota.</p>
                        <img src={NF21GenerateFiles2} alt="NF 21 - Gerar Arquivos" />
                    </div>
                    <div>
                        <p>Ao selecionar o ícone de cancelamento sobre uma NF emitida, é possível seguir o processo de cancelamento de uma nota.</p>
                        <img src={NF21GenerateFiles3} alt="NF 21 - Gerar Arquivos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}