import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialF2BInstallments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}F2B{" > "}Parcelas</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Parcelas</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src="img/60 - fin-f2b-parc.png" alt="Financeiro - F2B - Parcelas" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Gerar em Massa</b> abre-se a opção para geração de parcelas ou carnês para todos os clientes que possuem opção habilitada de Gerar Fatura Automática (Massa), na aba de automação do cadastro do cliente.</p>
                        <img src="img/61 - fin-f2b-parc-ger-mass.png" alt="Financeiro - F2B - Gerar em Massa" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone para visualização, em formato de uma impressora, o conteúdo do carnê é <b>enviado</b> para tela para visualização e impressão.</p>
                        <img src="img/60a - fin-f2b-parc-imp.png" alt="Financeiro - F2B - Marcar Impressão" />
                    </div>
                    <div>
                        <p>Após clicar no ícone em formato de impressora com o sinal de mais, o carnê é <b>visualizado</b> na tela para eventuais conferências e impressão.</p>
                        <img src="img/60b - fin-f2b-parc-visu-imp.png" alt="Financeiro - F2B - Imprimir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}