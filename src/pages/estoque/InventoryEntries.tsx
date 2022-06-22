import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import InventoryEntries1 from "./img/InventoryEntries1.png"
import InventoryEntries2 from "./img/InventoryEntries2.png"

export function InventoryEntries() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Estoque {">"} Entradas</h3>

                    <div>
                        <p>Nesta tela, visualizam-se os campos necessário para inclusão de materiais no estoque caracterizando a <b>entrada</b> do material.</p>
                        <img src={InventoryEntries1} alt="Estoque - Entradas" />
                    </div>
                    <div>
                        <p>Ao clicar no botão <b>tipo de produto</b> uma nova tela é exibida para cadastramento de materiais que não estejam em estoque.</p>
                        <img src={InventoryEntries2} alt="Estoque - Entradas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}