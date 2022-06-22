import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseNotaFiscal211 from "./img/ClientsMenuRightMouseNotaFiscal211.png"
import ClientsMenuRightMouseNotaFiscal212 from "./img/ClientsMenuRightMouseNotaFiscal212.png"

export function ClientMouseMenuNF21() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Nota Fiscal 21</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizadas as <b>notas fiscais 21</b> registradas no sistema, que podem ser selecionadas para impressão.</p>
                        <img src={ClientsMenuRightMouseNotaFiscal211} alt="Clientes - Menu lado direito do mouse - Nota Fiscal 21" ></img>
                    </div>

                    <div>
                        <p>Visualização da nota fiscal 21 para impressão.</p>
                        <img src={ClientsMenuRightMouseNotaFiscal212} alt="Clientes - Menu lado direito do mouse - Nota Fiscal 21" ></img>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}