import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerApplicationClient from "./img/ConfigurationServerApplicationClient.png"

export function ConfigApplicationClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Aplicativo{" > "}Cliente</h3>
                    <p>Informações de configuração do aplicativo de campo para o cliente. Podem ser configurados:</p>

                    <ul >
                        <li>Liberação Automática de Aparelho</li>
                        <li>Limites de Suporte Abertos pelo Aplicativo</li>
                        <li>Visualizar suportes abertos pelo aplicativo ou pela central de atendimento</li>
                        <li>Tipos de suporte que serão abertos</li>
                    </ul>



                    <img src={ConfigurationServerApplicationClient} alt="Configuração Servidor - Aplicativo - Cliente" />

                </div>
            </div>
            <Footer />
        </div>
    )
}