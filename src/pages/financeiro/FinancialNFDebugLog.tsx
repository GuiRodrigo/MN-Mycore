import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NF21DebugLogs1 from "./img/NF21DebugLogs1.png"
import NF21DebugLogs2 from "./img/NF21DebugLogs2.png"

export function FinancialNFDebugLog() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Depurar Logs</h3>

                    <div>
                        <p>Nesta tela são visualizados os arquivos de <b>log</b> com as mensagens internas do processamento das NF 21, sobre o qual é possível realizar as ações de processar os logs de erro, fazer o upload de arquivos do microcomputador local para o sistema, ou ainda, excluir o arquivo de log. </p>
                        <img src={NF21DebugLogs1} alt="NF 21 - Depurar Logs" />
                    </div>
                    <div>
                        <p>Ao visualizar a lista de depuração dos logs, também pode-se <b>editar</b> os dados de cliente e <b>exportar</b> a lista para o Excel</p>
                        <img src={NF21DebugLogs2} alt="NF 21 - Depurar Logs" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}