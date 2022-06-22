import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupRestore from "./img/ConfigurationServerBackupRestore.png"

export function ConfigBackupRestore() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Restaurar Backup</h3>

                    <div>
                        <p>Ao selecionar-se a opção de restaurar o backup, haverá uma pergunta para que se confirme, ou não, a operação.</p>
                        <img src={ConfigurationServerBackupRestore} alt="Configuração Servidor - Backup Restaurar" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}