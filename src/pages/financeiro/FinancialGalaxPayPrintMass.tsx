import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialGalaxPayPrintMass() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Galax Pay{" > "}Impressão em Massa</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Impressão em Massa</b>, abre-se uma janela onde os parâmetros devem ser informados para geração de todos os carnês e faturas existentes na tela.</p>
                        <img src="img/56 - fin-galax-imp-mass-carn-ger.png" alt="Financeiro - Galax Pay - Impressão em Massa" />
                    </div>
                    <div>
                        <p>Após a geração dos carnês e faturas pertinentes aos parâmetros definidos, um log de erros de impressão é aberto em janela para análise.</p>
                        <img src="img/57 - fin-galax-imp-mass-err.png" alt="Financeiro - Galax Pay - Impressão em Massa - Log de Erro" />
                    </div>
                    <div>
                        <p>Após a geração dos carnês e faturas pertinentes aos parâmetros definidos, pode-se visualizar e imprimir os mesmos.</p>
                        <img src="img/58 - fin-galax-imp-mass-cons.png" alt="Financeiro - Galax Pay - Impressão em Massa" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}