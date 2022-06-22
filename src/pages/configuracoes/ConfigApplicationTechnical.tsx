import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerApplicationTechnical from "./img/ConfigurationServerApplicationTechnical.png"

export function ConfigApplicationTechnical() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Aplicativo{" > "}Técnico</h3>
                    <p>Campos contendo as informações dos dados relacionados ao aplicativo para o técnico de campo. Podem ser configurados:</p>

                    <ul >
                        <li>Liberação Automática de Aparelho</li>
                        <li>Liberação de Hora Extra</li>
                        <li>Períodos de Uso</li>
                        <li>A cor do caminho realizado pelo Técnico na Aba de Monitoramento do Menu <b>Help Desk</b></li>
                        <li>O Avatar que identifica o técnico</li>
                    </ul>


                    <img src={ConfigurationServerApplicationTechnical} alt="Configuração Servidor - Aplicativo - Técnico" />

                </div>
            </div>
            <Footer />
        </div>
    )
}