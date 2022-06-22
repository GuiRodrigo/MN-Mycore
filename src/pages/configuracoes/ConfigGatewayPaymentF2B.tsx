import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentF2B from "./img/ConfigurationServerGatewayPaymentF2B.png"

export function ConfigGatewayPaymentF2B() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}F2B</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway F2B.</p>
                        <img src={ConfigurationServerGatewayPaymentF2B} alt="Configuração Servidor - Gateway de Pagamento - F2B" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}