import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGatewayPaymentBilletEasy from "./img/ConfigurationServerGatewayPaymentBilletEasy.png"

export function ConfigGatewayPaymentBoletoEasy() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Gateway de Pagamento{" > "}Boleto Fácil</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários às configurações de pagamento com o Boleto Fácil.</p>
                        <img src={ConfigurationServerGatewayPaymentBilletEasy} alt="Configuração Servidor - Gateway de Pagamento - Boleto Fácil" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}