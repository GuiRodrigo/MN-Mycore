import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentWidePay from "./img/ConfigurationServerGatewayPaymentWidePay.png"

export function ConfigGatewayPaymentWidePay() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Wide Pay</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway Wide Pay.</p>
                        <img src={ConfigurationServerGatewayPaymentWidePay} alt="Configuração Servidor - Gateway de Pagamento - Wide Pay" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}