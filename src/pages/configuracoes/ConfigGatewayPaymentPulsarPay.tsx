import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentPulsarPay from "./img/ConfigurationServerGatewayPaymentPulsarPay.png"

export function ConfigGatewayPaymentPulsarPay() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{' > '}Gateway de Pagamento{' > '}PulsarPay</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações de pagamento com o Pulsar Pay.</p>
                        <img src={ConfigurationServerGatewayPaymentPulsarPay} alt="Configuração Servidor - Gateway de Pagamento - PulsarPay" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}