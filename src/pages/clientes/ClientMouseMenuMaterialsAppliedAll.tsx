import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseAppliedMaterialsAll from "./img/ClientsMenuRightMouseAppliedMaterialsAll.png"

export function ClientMouseMenuMaterialsAppliedAll() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Materiais Aplicados{" > "}Todos</h3>

                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse e selecionar-se a opção de materiais aplicados, sobre um cliente, será aberta uma janela com a lista de <b>todos</b> os materiais, cuja aplicação foi realizada para aquele cliente.</p>
                        <img src={ClientsMenuRightMouseAppliedMaterialsAll} alt="Clientes - Menu lado direito do mouse - Materiais Aplicados - Todos" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}