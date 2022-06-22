import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import StockMainScreen from "./img/StockMainScreen.png"

export function Stock() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Estoque {">"} Principal</h3>

                    <div>
                        <p>O módulo de estoque foi desenvolvido para gerenciar os materiais aplicados em campo, proporcionando o controle dos itens que são necessários às instalações.</p>
                        <p>No módulo de Estoque, pode-se:</p>

                        <ul>

                            <li>Realizar entrada de materiais no estoque;</li>
                            <li>Visualizar estoque e fazer movimentação de materiais;</li>
                            <li>Realizar saídas com o operador;</li>
                            <li>Realizar saídas com o cliente;</li>
                            <li>Analisar o almoxarifado;</li>
                            <li>Inserir seriais para os materiais em estoque;</li>
                            <li>Alocar materiais por serial;</li>
                            <li>Importar NF-e 55;</li>

                        </ul>
                    </div>
                    <div>
                        <p>As opções estão dispostas conforme as abas de menus apresentadas abaixo:</p>
                        <img src={StockMainScreen} alt="Estoque - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}