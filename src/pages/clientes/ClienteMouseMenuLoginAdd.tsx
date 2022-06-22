import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseLoginsAdd from "./img/ClientsMenuRightMouseLoginsAdd.png"

export function ClienteMouseMenuLoginAdd() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes {">"} Menu Mouse {">"} Logins {">"} Adicionar</h3>

                    <div>
                        <p>Na tela, abaixo, devem ser adicionados todos os parâmetros para habilitação do login do usuário.</p>
                        <img src={ClientsMenuRightMouseLoginsAdd} alt="Clientes - Menu lado direito do mouse - Logins Adicionar"></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}