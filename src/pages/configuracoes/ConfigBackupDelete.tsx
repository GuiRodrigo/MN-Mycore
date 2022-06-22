import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerBackupDelete from "./img/ConfigurationServerBackupDelete.png"

export function ConfigBackupDelete() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Backup{" > "}Deletar</h3>

                    <div>
                        < p> Ao selecionar-se a opção de deletar um backup, o arquivo selecionado será apagado do disco, não havendo mais possibilidade de recuperação daquele arquivo em especifico.</p>
                        <img src={ConfigurationServerBackupDelete} alt="Configuração Servidor - Backup - Deletar" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}