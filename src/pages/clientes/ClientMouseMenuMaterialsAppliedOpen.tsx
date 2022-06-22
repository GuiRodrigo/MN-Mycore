import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseAppliedMaterialsOpen from "./img/ClientsMenuRightMouseAppliedMaterialsOpen.png"

export function ClientMouseMenuMaterialsAppliedOpen() {
  return (
    <div id="container">
      <div id="pageContent">
        <Menu />
        <div id="textContent">

          <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Materiais Aplicados{" > "}Aberto</h3>

          <div>
            <p>Na janela de materiais aplicados, pode-se clicar no botão <b>aberto</b> para se visualizar os materiais que estão em aberto para serem aplicados a um cliente, ou cujo chamado ainda não foi encerrado.</p>
            <img src={ClientsMenuRightMouseAppliedMaterialsOpen} alt="Clientes - Menu lado direito do mouse - Materiais Aplicados - Aberto"></img>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  );
}
