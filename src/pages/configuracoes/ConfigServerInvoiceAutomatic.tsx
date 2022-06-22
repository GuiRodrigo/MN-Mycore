import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerAutomaticInvoice from "./img/ConfigurationServerAutomaticInvoice.png"

export function ConfigServerInvoiceAutomatic() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Fatura Automática</h3>

                    <div>
                        <p>Na tela, abaixo, visualiza-se as configurações dos parâmetros para impressão das faturas que serão geradas automaticamente pelo MyCore.</p>
                        <img src={ConfigurationServerAutomaticInvoice} alt="Configuração Servidor - Fatura Automática" />

                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}