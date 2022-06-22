import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ReturnMenuProcessing from "./img/ReturnMenuProcessing.png"
import ReturnProcessing from "./img/ReturnProcessing.png"
import ReturnDownload from "./img/ReturnDownload.png"
import ReturnSearchFile1 from "./img/ReturnSearchFile1.png"
import ReturnSearchFile2 from "./img/ReturnSearchFile2.png"
import Return from "./img/Return.png"

export function FinancialBankReturn() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Retorno</h3>

                    <div>
                        <p>Nesta tela são visualizados os arquivos de <b>retorno</b> das remessas de faturas.</p>
                        <img src={Return} alt="Retorno" />
                    </div>
                    <div>
                        <p>Utilizando o botão do lado direito sobre um arquivo é diponibilizada as opção <b>processar retorno</b>, para que os registros do arquivo sejam aferidos e seja gerado um relatório do processamento.</p>
                        <img src={ReturnMenuProcessing} alt="Retorno - Menu Processamento" />
                    </div>
                    <div>
                        <p>Selecionando a opção de <b>processamento do arquivo</b> de retorno é retornado um relatório com os registros aferidosa remessas da faturas.</p>
                        <img src={ReturnProcessing} alt="Retorno - Processamento" />
                    </div>
                    <div>
                        <p>Selecionando a opção de <b>download</b> o arquivo de retorno selecionado sera baixado para o seu diretório de downloadso microcomputador onde a operação foi solicitada.</p>
                        <img src={ReturnDownload} alt="Retorno - Download" />
                    </div>
                    <div>
                        <p>Selecionando a opção de <b>buscar arquivo</b> pode-se solicitar a carga de um arquivo de retorno para o processamento pelo MyCore.</p>
                        <img src={ReturnSearchFile1} alt="Retorno - Buscar Arquivo" />
                    </div>
                    <div>
                        <p>Selecionando a opção de <b>deletar</b>, o arquivo selecionado será excluido do sistema.</p>
                        <img src={ReturnSearchFile2} alt="Retorno - Buscar Arquivo" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}