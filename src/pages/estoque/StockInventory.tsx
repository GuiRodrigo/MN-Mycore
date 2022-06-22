import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import Stock from "./img/Stock.png"
import InventoryCorrectQuantity1 from "./img/InventoryCorrectQuantity1.png"
import InventoryCorrectQuantity2 from "./img/InventoryCorrectQuantity2.png"

export function StockInventory() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Estoque {">"} Estoque</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista dos <b>materiais em estoque</b>, possibilitando a visualização dos materiais pertencentes ao <b>patrimônio</b>, o <b>ajuste de estoque</b> e ainda a correção da <b>quantidade em estoque</b>.</p>
                        <img src={Stock} alt="Estoque" />
                    </div>
                    <div>
                        <p>Ao clicar com o botão do lado direito sobre a lista de itens, visualiza-se a opção de <b>corrigir quantidade</b>.</p>
                        <img src={InventoryCorrectQuantity1} alt="Estoque - Corrigir Quantidade" />
                    </div>
                    <div>
                        <p>Ao clicar sobre a opção de <b>corrigir quantidade</b> visualiza-se uma caixa de diálogo onde se pode mudar o <b>quantitativo de materiais em estoque</b>.</p>
                        <img src={InventoryCorrectQuantity2} alt="Estoque - Corrigir Quantidade" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}