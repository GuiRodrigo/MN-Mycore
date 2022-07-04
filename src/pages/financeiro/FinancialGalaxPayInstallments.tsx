import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialGalaxPayInstallments() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Galax Pay{" > "}Parcelas</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Parcelas</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src="img/50 - fin-galax-parc.png" alt="Financeiro - Galax Pay - Parcelas" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone <b>Gerar em Massa</b> abre-se a opção para geração de parcelas ou carnês para todos os clientes que possuem opção habilitada de Gerar Fatura Automática (Massa), na aba de automação do cadastro do cliente.</p>
                        <img src="img/51 - fin-galax-ger-mass.png" alt="Financeiro - Galax Pay - Gerar em Massa" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone para visualização, em formato de uma impressora, o conteúdo do carnê é <b>enviado</b> para tela para visualização e impressão.</p>
                        <img src="img/50a - fin-galax-parc-imp.png" alt="Financeiro - Galax Pay - Marcar Impressão" />
                    </div>
                    <div>
                        <p>Após clicar no ícone em formato de impressora com o sinal de mais, o carnê é <b>visualizado</b> na tela para eventuais conferências e impressão.</p>
                        <img src="img/50b - fin-galax-parc-visu-imp.png" alt="Financeiro - Galax Pay - Imprimir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}