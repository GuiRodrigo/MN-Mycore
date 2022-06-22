import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupUpload1 from "./img/ConfigurationServerBackupUpload1.png"
import ConfigurationServerBackupUpload2 from "./img/ConfigurationServerBackupUpload2.png"

export function ConfigBackupUploadServer() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Upload para Servidor</h3>

                    <div>
                        <p>Ao selecionar-se a opção de upload do backup, será aberta uma janela do sistema operacional para que se escolha um diretório, ou uma pasta, onde o arquivo ficará armazenado.</p>
                        <img src={ConfigurationServerBackupUpload1} alt="Configuração Servidor - Backup - Upload" />
                        <img src={ConfigurationServerBackupUpload2} alt="Configuração Servidor - Backup - Upload" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}