import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import WhatsappServerConfiguration from "./img/WhatsappServerConfiguration.png"

export function ConfigWhatsapp() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Whatsapp</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o campo necessário à configuração do Whatsapp. Basta definir um texto para que mesmo seja exibido no comprovante de pagamento.</p>
                        <img src={WhatsappServerConfiguration} alt="Configuração Servidor - Whatsapp" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}