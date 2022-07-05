import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialF2BCarnet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}F2B{" > "}Carnês</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Carnês</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src="img/62 - fin-f2b-carn.png" alt="Financeiro - F2B - Carnês" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone em formato de X na lateral direita da tela há a opção de <b>deletar</b> o Carnê, entretanto, antes da exclusão efetiva há um aviso para escolha.</p>
                        <img src="img/63 - fin-f2b-carn-del.png" alt="Financeiro - F2B - Carnês - Deletar" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}