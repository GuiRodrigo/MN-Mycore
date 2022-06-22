import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersAddress from "./img/CustomersAddress.png"

export function AddAdressClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes {">"} Novo Cliente {">"} Endereço</h3>

                    <div>
                        <p> Nesta tela serão adicionadas as informações referentes ao endereço dos clientes.</p>

                        <img src={CustomersAddress} alt="Clientes Endereço" className="view_images shadow"></img>
                    </div>
                </div>

            </div>

            <Footer />
        </div >
    )
}