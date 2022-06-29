import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialWidePayInstallment from "./img/FinancialWidePayInstallments.png"
import FinancialWidePayDeletInstallment from "./FinancialWidePayDeletInstallment.png"
import FinancialWidePayGenerateInvoiceMass from "./img/FinancialWidePayGenerateInvoiceMass.png"
import FinancialWidePayExportToPDF from "./img/FinancialWidePayExportToPDF.png"
import FinancialWidePayDocumentInPDF from "./img/FinancialWidePayDocumentInPDF.png"

export function FinancialWidePayInstallments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Wide Pay{" > "}Carnês/Parcelas</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Carnês/Parcelas</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src={FinancialWidePayInstallment} alt="Financeiro - Wide Pay - Carnê" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone em formato de X na lateral direita da tela há a opção de <b>deletar</b> o Carnê/Parcela, entretanto, antes da exclusão efetiva há um aviso para escolha.</p>
                        <img src={FinancialWidePayDeletInstallment} alt="Financeiro - Wide Pay - Deleta Carnês" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Gerar em Massa</b> abre-se a opção para geração de parcelas ou carnês para todos os clientes que possuem opção habilitada de <b>Gerar Fatura Automática (Massa)</b>, na aba de automação do cadastro do cliente.</p>
                        <img src={FinancialWidePayGenerateInvoiceMass} alt="Financeiro - Wide Pay - Gera Fatura em Massa" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Exportar para PDF</b>, o conteúdo listado na tela será exportado para um documento no formato .PDF.</p>
                        <img src={FinancialWidePayExportToPDF} alt="Financeiro - Wide Pay - Exporta para PDF" />
                    </div>
                    <div>
                        <p>Após exportar o conteúdo listado na tela para o formato .PDF o documento é <b>visualizado</b> na tela, clicando-se no ícone do arquivo cujo download foi realizado.</p>
                        <img src={FinancialWidePayDocumentInPDF} alt="Financeiro - Wide Pay - Documento em PDF" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Exportar para Excel</b>, o conteúdo listado na tela será exportado para um documento no formato .XLSX.</p>
                        <img src="img/46a - fin-wide-exp-excel.png" alt="Financeiro - Wide Pay - Exporta para Excel" />
                    </div>
                    <div>
                        <p>Após exportar o conteúdo listado na tela para o formato .XLSX o documento é <b>visualizado</b> na tela, clicando-se no ícone do arquivo cujo download foi realizado.</p>
                        <img src="img/44d - fin-wide-exp-excel.png" alt="Financeiro - Wide Pay - Documento em Excel" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone de <b>Processar Baixa</b>, são realizadas baixas ???.</p>
                        <img src="img/44g - fin-wide-carn-proc-bx.png" alt="Financeiro - Wide Pay - Processar Baixa" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone para visualização, em formato de uma impressora, o conteúdo do carnê é <b>enviado</b> para tela para visualização e impressão.</p>
                        <img src="img/44e - fin-wide-carn-imp.png" alt="Financeiro - Wide Pay - Visualizar Impressão" />
                    </div>
                    <div>
                        <p>Após clicar no ícone em formato de impressora com o sinal de mais, o carnê é <b>visualizado</b> na tela para eventuais conferências e impressão.</p>
                        <img src="img/44f - fin-wide-carn-vis-imp.png" alt="Financeiro - Wide Pay - Documento em Visualização na Tela" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}