import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuSideRightMouseLoginsExtract from "./img/ClientsMenuSideRightMouseLoginsExtract.png"

export function ClientMouseMenuLoginExtract() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Logins{" > "}Extrato</h3>

                    <div>
                        <p>Na tela, abaixo, são exibidas as informações relativas as conexões dos logins. A exibição pode ser feita com a <b>seleção do período</b>. Há botões para exportação da lista para os formatos do Acrobat Reader <b>(.PDF)</b> e Excel <b>(.XLSX)</b>.</p>
                        <img src={ClientsMenuSideRightMouseLoginsExtract} alt="Clientes - Menu lado direito do mouse - Logins Extrato" ></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}