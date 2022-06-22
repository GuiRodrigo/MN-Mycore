import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupSendFile1 from "./img/ConfigurationServerBackupSendFile1.png"
import ConfigurationServerBackupSendFile2 from "./img/ConfigurationServerBackupSendFile2.png"

export function ConfigBackupSend() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Enviar Arquivo</h3>

                    <div>
                        <p>Ao selecionar-se a opção de enviar arquivo do backup, será aberta uma janela do sistema operacional para que se escolha um diretório, ou uma pasta, onde o arquivo ficará armazenado.</p>
                        <img src={ConfigurationServerBackupSendFile1} alt="Configuração Servidor - Backup - Enviar Arquivo" />
                    </div>
                    <div>
                        <p>Janela do sistema operacional aberta para seleção da pasta onde o arquivo será armazenado.</p>
                        <img src={ConfigurationServerBackupSendFile2} alt="Configuração Servidor - Backup - Enviar Arquivo" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}