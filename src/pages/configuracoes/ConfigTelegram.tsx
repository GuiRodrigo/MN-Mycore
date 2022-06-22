import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import TelegramServerConfiguration from "./img/TelegramServerConfiguration.png"

export function ConfigTelegram() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Telegram</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos necessários à configuração do Telegram, guiada por help, para o configurar como serviço a ser utilizado na abertura e acompanhamento de chamados.</p>
                        <img src={TelegramServerConfiguration} alt="Configuração Servidor - Telegram" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}