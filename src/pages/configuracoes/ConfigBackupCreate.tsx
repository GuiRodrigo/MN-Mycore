import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupCreate from "./img/ConfigurationServerBackupCreate.png"

export function ConfigBackupCreate() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Criar Backup</h3>

                    <div>
                        <p>Ao selecionar-se a opção de criar backup, uma cópia de segurança do banco de dados é gerada, no momento em que o ícone foi clicado e de acordo com a hora/fuso do servidor.</p>
                        <img src={ConfigurationServerBackupCreate} alt="Configuração Servidor - Backup - Criar" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}