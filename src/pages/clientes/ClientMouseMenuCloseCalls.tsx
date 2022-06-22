import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuLawMouseCallsClosed from "./img/CustomersMenuLawMouseCallsClosed.png"

export function ClientMouseMenuCloseCalls() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Chamados{" > "}Fechados</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizados os chamados fechados, no sistema, por cliente.</p>
                        <img src={CustomersMenuLawMouseCallsClosed} alt="Clientes - Menu lado direito do mouse - Chamados Fechados" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}