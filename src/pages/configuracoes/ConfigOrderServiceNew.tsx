import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerOrderServiceNew from "./img/ConfigurationServerOrderServiceNew.png"

export function ConfigOrderServiceNew() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Ordem de Serviço{" > "}Nova OS</h3>

                    <p>Nesta tela é exibido o pop-up onde deve ser inserido o nome de um nova ordem de serviço.</p>
                    <div>
                        <img src={ConfigurationServerOrderServiceNew} alt="Configuração Servidor Ordem de Serviço - Nova" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}