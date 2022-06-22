import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ServerConfigurationWebSMS from "./img/ServerConfigurationWebSMS.png"

export function ConfigSMS() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} SMS</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários à configuração do SMS, para envio via Gateway para os clientes. Nesta opção é possivel:</p>
                        <ul >
                            <li>Definir horário inicial e final de envio</li>
                            <li>Configurar quantidade de dias antes e depois do envio da fatura</li>
                            <li>Configurar quantidade de dias antes e depois do vencimento para envio automático da fatura ou lembrete</li>
                            <li>Criar templates (modelos)</li>
                        </ul>


                        <img src={ServerConfigurationWebSMS} alt="Configuração Servidor - WebSMS" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}