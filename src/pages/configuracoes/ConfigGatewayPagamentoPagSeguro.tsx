import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentPagSeguro from "./img/ConfigurationServerGatewayPaymentPagSeguro.png"

export function ConfigGatewayPagamentoPagSeguro() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Pag Seguro</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway Pag Seguro.</p>
                        <img src={ConfigurationServerGatewayPaymentPagSeguro} alt="Configuração Servidor - Gateway de Pagamento - Pag Seguro" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}