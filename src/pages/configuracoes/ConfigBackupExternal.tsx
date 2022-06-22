import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupExternal from "./img/ConfigurationServerBackupExternal.png"
import ConfigurationServerExternalBackupFTP from "./img/ConfigurationServerExternalBackupFTP.png"
import ConfigurationServerBackupExternalGoogleDrive from "./img/ConfigurationServerBackupExternalGoogleDrive.png"
import ConfigurationServerBackupExternalGoogleDriveAPI from "./img/ConfigurationServerBackupExternalGoogleDriveAPI.png"
import ConfigurationServerBackupExternalGoogleDriveClientID from "./img/ConfigurationServerBackupExternalGoogleDriveClientID.png"
import ConfigurationServerBackupExternalGoogleDriveAccountGmail from "./img/ConfigurationServerBackupExternalGoogleDriveAccountGmail.png"
import ConfigurationServerBackupExternalGoogleDriveAlert from "./img/ConfigurationServerBackupExternalGoogleDriveAlert.png"
import ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart1 from "./img/ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart1.png"
import ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart2 from "./img/ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart2.png"
import ConfigurationServerBackupExternalGoogleDriveCopyAlthcode from "./img/ConfigurationServerBackupExternalGoogleDriveCopyAlthcode.png"
import ConfigurationServerBackupExternalGoogleDrivePasteAlthcode from "./img/ConfigurationServerBackupExternalGoogleDrivePasteAlthcode.png"
import ConfigurationServerBackupExternalGoogleDriveSaveSettings from "./img/ConfigurationServerBackupExternalGoogleDriveSaveSettings.png"
import ConfigurationServerBackupExternalDropBox from './img/ConfigurationServerBackupExternalDropBox.png'

export function ConfigBackupExternal() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Backup Externo</h3>

                    <div>
                        <p>Ao selecionar-se a opção de backup externo, pode-se escolher qual o meio externo será utilizado para gravar o arquivo de segurança fora da máquina onde as informações residem.</p>
                        <img src={ConfigurationServerBackupExternal} alt="Configuração Servidor - Backup Externo" />
                    </div>
                    <div>
                        <p>Existe a opção de se enviar o backup externo para um servidor de FTP.</p>
                        <img src={ConfigurationServerExternalBackupFTP} alt="Configuração Servidor - Backup Externo - FTP" />
                    </div>
                    <div>
                        <p>Existe a opção de se enviar o backup externo para o Google Drive.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDrive} alt="Configuração Servidor - Backup Externo - Google Drive" />
                    </div>
                    <div>
                        <p>Para executar o backup via Google Drive, é necessário <b>Obter Client ID e Client Secret</b>, clicando-se no botão corresponde da configuração do Mycore. Após abrir a janela do PHP Quickstart no navegador, clicar no botão <b>Enable the Drive API</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveAPI} alt="Configuração Servidor - Backup Externo - Google Drive - API" />
                    </div>
                    <div>
                        <p>Após habilitar a API, é necessário obter o <b>Client ID e Client Secret</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveClientID} alt="Configuração Servidor - Backup Externo - Google Drive - Client ID" />
                    </div>
                    <div>
                        <p>Após obter os Client´s, é necessário selecionar a conta do Gmail correspontente a permissão para obtenção do <b>Althcode</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveAccountGmail} alt="Configuração Servidor - Backup Externo - Google Drive - Conta Gmail" />
                    </div>
                    <div>
                        <p>Ao entrar na conta escolhida, é necessário clicar em <b>Avançado</b> no navegador para permitir a obtenção do <b>Althcode</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveAlert} alt="Configuração Servidor - Backup Externo - Google Drive - Alerta" />
                    </div>
                    <div>
                        <p>Após entrar na conta é necessário dar permissão ao App Quickstart para obter o <b>Althcode</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart1} alt="Configuração Servidor - Backup Externo - Google Drive - Permissão Quickstart" />
                    </div>
                    <div>
                        <p>Após dar permissão ao App Quickstart para obter o <b>Althcode</b>, é necessário dar permissão na segunda etapa.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDrivePermissionQuickstart2} alt="Configuração Servidor - Backup Externo - Google Drive - Permissão Quickstart" />
                    </div>
                    <div>
                        <p>Uma vez que as permissões da conta foram concedidas, é necessário copiar o código <b>Althcode</b> para a área de trabalho do Windows.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveCopyAlthcode} alt="Configuração Servidor - Backup Externo - Google Drive - Copiar Althcode" />
                    </div>
                    <div>
                        <p>Após copiar o Athcode para a área de trabalho, cole-o no campo específico do Mycore para continuar o processo de autorização.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDrivePasteAlthcode} alt="Configuração Servidor - Backup Externo - Google Drive - Colar Althcode" />
                    </div>
                    <div>
                        <p>Para finalizar o processo de geração dos códigos e as autorizações, basta clicar no botão <b>salvar</b>.</p>
                        <img src={ConfigurationServerBackupExternalGoogleDriveSaveSettings} alt="Configuração Servidor - Backup Externo - Google Drive - Salvar Configurações" />
                    </div>
                    <div>
                        <p>Existe a opção de se enviar o backup externo para o Drop Box, entretanto, no momento esta funcionalidade está desabilitada.</p>
                        <img src={ConfigurationServerBackupExternalDropBox} alt="Configuração Servidor - Backup Externo - Drop Box" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}