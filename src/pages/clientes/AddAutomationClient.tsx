import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersAutomation from "./img/CustomersAutomation.png"

export function AddAutomationClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Novo Cliente{" > "}Automação</h3>
                    <div>
                        <p> Nesta aba deverão ser acrescidas as informações para as automações ligadas aos clientes.</p>

                        <img src={CustomersAutomation} alt="Clientes Automação" className="view_images shadow"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}