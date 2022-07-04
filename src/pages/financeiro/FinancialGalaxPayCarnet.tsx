import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function FinancialGalaxPayCarnet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Galax Pay{" > "}Carnês</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Carnês</b>, os campos com as informações pertinentes ficam dispostos na tela.</p>
                        <img src="img/52 - fin-galax-carn.png" alt="Financeiro - Galax Pay - Carnês" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone em formato de X na lateral direita da tela há a opção de <b>deletar</b> o Carnê, entretanto, antes da exclusão efetiva há um aviso para escolha.</p>
                        <img src="img/52a - fin-galax-carn-del.png" alt="Financeiro - Galax Pay - Carnês" />
                    </div>



                </div>
            </div >
            <Footer />
        </div >
    )
}