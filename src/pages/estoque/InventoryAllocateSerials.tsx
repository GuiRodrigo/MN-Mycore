import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AllocateSerials from "./img/AllocateSerials.png"

export function InventoryAllocateSerials() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Estoque{" > "}Alocar Seriais</h3>

                    <div>
                        <p>Nesta tela, é exibida a lista de materiais, onde apos selecionar-se um operador e um material, pode-se <b>alocar um serial</b> para o material em específico.</p>
                        <img src={AllocateSerials} alt="Alocar Seriais" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}