import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerContracts from "./img/ConfigurationServerContract.png"

export function ConfigContracts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Contratos</h3>

                    <div>
                        <p>Esta é a tela onde visualizam-se os contratos elaborados e disponíveis.</p>
                        <img src={ConfigurationServerContracts} alt="Configuração Servidor - Contratos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}