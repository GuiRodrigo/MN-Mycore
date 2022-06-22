import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientesMenuLadoDireitoMouseLoginsAdicionar from "./img/ClientesMenuLadoDireitoMouseLoginsAdicionar.png"

export function ClienteMouseMenuLoginFiber() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes {">"} Menu Mouse {">"} Logins {">"} Fibra</h3>

                    <div>
                        <p>Na tela, abaixo, devem ser adicionados todos os parâmetros da fibra associada ao cliente.</p>
                        <img src={ClientesMenuLadoDireitoMouseLoginsAdicionar} alt="Clientes - Menu lado direito do mouse - Logins Adicionar" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}