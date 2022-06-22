import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import SMTPServerConfiguration1 from "./img/SMTPServerConfiguration1.png"
import SMTPServerConfiguration2 from "./img/SMTPServerConfiguration2.png"

export function ConfigSMTP() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" >"} SMTP</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos e opções necessários à configuração do SMTP, para envio de e-mails via Gateway para os clientes.</p>
                        <img src={SMTPServerConfiguration1} alt="Configuração Servidor - SMTP" />
                        <img src={SMTPServerConfiguration2} alt="Configuração Servidor - SMTP" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}