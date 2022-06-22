import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerProcedures from "./img/ConfigurationServerProcedures.png"
import ConfigurationServerProceduresModel from "./img/ConfigurationServerProceduresModel.png"
import ConfigurationServerProceduresNew from "./img/ConfigurationServerProceduresNew.png"

export function ConfigServerProcedures() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Procedimentos</h3>

                    <div>
                        <div>
                            <p>Na tela, abaixo, visualizam-se as configurações para os procedimentos. Essa função define rotinas de atendimento ao cliente.</p>
                            <img src={ConfigurationServerProcedures} alt="Configuração Servidor - Procedimentos" />
                        </div>
                        <div>
                            <p>Ao se clicar sobre um item dentre os procedimentos criados abre-se o <b>modelo do procedimento</b> que foi criado.</p>
                            <img src={ConfigurationServerProceduresModel} alt="Configuração Servidor - Procedimentos Modelo" />
                        </div>
                        <div>
                            <p>Ao se clicar no botão <b>novo procedimento</b> é aberta uma janela para criação de um procedimento.</p>
                            <img src={ConfigurationServerProceduresNew} alt="Configuração Servidor - Procedimentos Novo" />
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}