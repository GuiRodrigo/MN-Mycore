import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import BackupServerConfiguration from "./img/BackupServerConfiguration.png"

export function ConfigBackup() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{' > '}Backup</h3>

                    <div>
                        <p>Nesta tela visualizam-se as informações sobre o Backup (Cópia de Segurança) do sistema, incluindo o banco de dados. As opções de backup são:</p>
                        <ul >
                            <li>Criar Backup</li>
                            <li>Restaurar deste Backup</li>
                            <li>Download do Servidor</li>
                            <li>Upload para Servidor</li>
                            <li>Backup Externo</li>
                            <li>Deletar</li>
                            <li>Enviar Backup</li>
                        </ul>
                    </div>

                    <div>
                        <img src={BackupServerConfiguration} alt="Configuração Servidor - Backup" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}