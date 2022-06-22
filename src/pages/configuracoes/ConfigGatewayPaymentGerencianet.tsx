import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentManagement from "./img/ConfigurationServerGatewayPaymentManagement.png"

export function ConfigGatewayPaymentGerencianet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Gerencianet</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações do sistema para pagamento via gateway Gerencianet.</p>
                        <img src={ConfigurationServerGatewayPaymentManagement} alt="Configuração Servidor - Gateway de Pagamento - Gerencianet" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}