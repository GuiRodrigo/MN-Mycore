import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesMenu from "./img/ClientsMenuRightMouseInvoicesMenu.png"

export function ClientMouseMenuInvoicesMenu() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentado o menu, com algumas operações que podem ser realizadas com as faturas, ao se clicar com o botão do lado direito do mouse, considerando que as ações ocorrem para o cliente sobre o qual o mouse está posicionado.</p>
                        <img src={ClientsMenuRightMouseInvoicesMenu} alt="Clientes - Menu lado direito do mouse - Faturas - Menu" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}