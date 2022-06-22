import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import APIServerConfiguration from "./img/APIServerConfiguration.png"

export function ConfigApi() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}API</h3>
                    <p>Na tela, abaixo, visualiza-se a configuração necessária para habilitar a funcionalidade de agregar a API do Mycore a um ambiente personalizado do cliente.</p>

                    <img src={APIServerConfiguration} alt="Configuração Servidor - API" />

                </div>
            </div>
            <Footer />
        </div>
    )
}