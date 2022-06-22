import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGrencianetCarnet from "./img/FinancialGrencianetCarnet.png"
import FinancialGrencianetDeletCarnet from "./img/FinancialGrencianetDeletCarnet.png"
import FinancialGrencianetGenerateInvoiceMass from "./img/FinancialGrencianetGenerateInvoiceMass.png"
import FinancialGrencianetExportToPDF from "./img/FinancialGrencianetExportToPDF.png"
import FinancialGrencianetDocumentPDF from "./img/FinancialGrencianetDocumentPDF.png"
import FinancialGrencianetExportToExcel from "./img/FinancialGrencianetExportToExcel.png"
import FinancialGrencianetDocumentExcel from "./img/FinancialGrencianetDocumentExcel.png"
import FinancialGrencianetPreviewPrint from "./img/FinancialGrencianetPreviewPrint.png"
import FinancialGrencianetDocumentVisualizationOnScreen from "./img/FinancialGrencianetDocumentVisualizationOnScreen.png"
import FinancialGrencianetPrinting from "./img/FinancialGrencianetPrinting.png"
import FinancialGrencianetDocumentModePrint from "./img/FinancialGrencianetDocumentModePrint.png"

export function FinancialGerencianetInstallments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Carnês/Parcelas</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Carnês/Parcelas</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src={FinancialGrencianetCarnet} alt="Financeiro - Gerencianet - Carnê" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone em formato de X na lateral direita da tela há a opção de <b>deletar</b> o Carnê/Parcela, entretanto, antes da exclusão efetiva há um aviso para escolha.</p>
                        <img src={FinancialGrencianetDeletCarnet} alt="Financeiro - Gerencianet - Deleta Carnês" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Gerar em Massa</b> abre-se a opção para geração de parcelas ou carnês para todos os clientes que possuem opção habilitada de <b>Gerar Fatura Automática (Massa)</b>, na aba de automação do cadastro do cliente.</p>
                        <img src={FinancialGrencianetGenerateInvoiceMass} alt="Financeiro - Gerencianet - Gera Fatura em Massa" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Exportar para PDF</b>, o conteúdo listado na tela será exportado para um documento no formato .PDF.</p>
                        <img src={FinancialGrencianetExportToPDF} alt="Financeiro - Gerencianet - Exporta para PDF" />
                    </div>
                    <div>
                        <p>Após exportar o conteúdo listado na tela para o formato .PDF o documento é <b>visualizado</b> na tela, clicando-se no ícone do arquivo cujo download foi realizado.</p>
                        <img src={FinancialGrencianetDocumentPDF} alt="Financeiro - Gerencianet - Documento em PDF" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Exportar para Excel</b>, o conteúdo listado na tela será exportado para um documento no formato .XLSX.</p>
                        <img src={FinancialGrencianetExportToExcel} alt="Financeiro - Gerencianet - Exporta para Excel" />
                    </div>
                    <div>
                        <p>Após exportar o conteúdo listado na tela para o formato .XLSX o documento é <b>visualizado</b> na tela, clicando-se no ícone do arquivo cujo download foi realizado.</p>
                        <img src={FinancialGrencianetDocumentExcel} alt="Financeiro - Gerencianet - Documento em Excel" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone para visualização, em formato de uma impressora com sinal de mais, o conteúdo do carnê é <b>enviado</b> para tela para visualização e impressão.</p>
                        <img src={FinancialGrencianetPreviewPrint} alt="Financeiro - Gerencianet - Visualizar Impressão" />
                    </div>
                    <div>
                        <p>Após clicar no ícone em formato de impressora com o sinal de mais, o carnê é <b>visualizado</b> na tela para eventuais conferências e impressão.</p>
                        <img src={FinancialGrencianetDocumentVisualizationOnScreen} alt="Financeiro - Gerencianet - Documento em Visualização na Tela" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone para visualização, em formato de uma impressora, o conteúdo da fatura é <b>enviado</b> para a tela para visualização e impressão.</p>
                        <img src={FinancialGrencianetPrinting} alt="Financeiro - Gerencianet - Impressão" />
                    </div>
                    <div>
                        <p>Após clicar no ícone em formato de impressora a fatura é <b>visualizada</b> na tela para visualização e impressão.</p>
                        <img src={FinancialGrencianetDocumentModePrint} alt="Financeiro - Gerencianet - Documento em Modo Impressão" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}