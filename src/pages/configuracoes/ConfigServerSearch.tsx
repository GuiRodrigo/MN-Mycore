import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerSearch from "./img/ConfigurationServerSearch.png"

export function ConfigServerSearch() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Pesquisa</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações da Pesquisa. A pesquisa tem a função de coletar quais os canais pelos quais a empresa ficou conhecida.</p>
                        <img src={ConfigurationServerSearch} alt="Configuração Servidor - Pesquisa" />

                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}