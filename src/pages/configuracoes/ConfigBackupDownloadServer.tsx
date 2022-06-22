import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupDownload from "./img/ConfigurationServerBackupDownload.png"

export function ConfigBackupDownloadServer() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Download do Servidor</h3>

                    <div>
                        <p>Ao selecionar-se a opção de download do backup, dependendo da configuração do navegador, haverá uma pergunta para que se confirme a operação de download; logo após, uma cópia será baixada. Caso não haja pergunta do navegador, o arquivo é baixado diretamente para a sua pasta padrão.</p>
                        <img src={ConfigurationServerBackupDownload} alt="Configuração Servidor - Backup - Download" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}