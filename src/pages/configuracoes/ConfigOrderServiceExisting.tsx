import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerOrderServiceExisting from "./img/ConfigurationServerOrderServiceExisting.png"

export function ConfigOrderServiceExisting() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Ordem de Serviço{" > "}OS Existente</h3>

                    <p>Modelo de ordem de serviço já elaborada. É por meio das ordens de serviço que se executam atividades técnicas de campo.</p>
                    <div>
                        <img src={ConfigurationServerOrderServiceExisting} alt="Configuração Servidor - Ordem de Serviço - Existente" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}