import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentGalaxypay from "./img/ConfigurationServerGatewayPaymentGalaxypay.png"

export function ConfigGatewayPaymentGalaxpay() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Galaxypay</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway Galaxypay.</p>
                        <img src={ConfigurationServerGatewayPaymentGalaxypay} alt="Configuração Servidor - Gateway de Pagamento - Galaxypay" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}