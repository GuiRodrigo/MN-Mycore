import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialWidePaySuportWithoutInvoice() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Wide Pay{" > "}Suportes sem Fatura</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Suportes sem Fatura</b>, abre-se uma janela na qual, por meio de parâmetros, se verifica todos os serviços realizados para os quais não foram emitidas faturas e pode-se gerá-las. Nesta janela o ícone <b>gerar</b> fica disponível para as faturas que ainda não foram geradas. Ao clicar sobre o botão, basta escolher a data e plano de contas para o qual se quer gerar a fatura.</p>
                        <img src="img/49 - fin-wide-sup-sem-fat.png" alt="Financeiro - Wide Pay - Impressão em Massa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}