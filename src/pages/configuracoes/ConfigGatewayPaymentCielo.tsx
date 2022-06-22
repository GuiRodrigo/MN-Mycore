import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentCielo from "./img/ConfigurationServerGatewayPaymentCielo.png"

export function ConfigGatewayPaymentCielo() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Cielo</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway Cielo.</p>
                        <img src={ConfigurationServerGatewayPaymentCielo} alt="Configuração Servidor - Gateway de Pagamento - Cielo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}