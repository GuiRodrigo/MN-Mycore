import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerOrderService from "./img/ConfigurationServerOrderService.png"

export function ConfigOrderService() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Ordem de Serviço</h3>

                    <div>
                        <p>Esta é a tela onde visualizam-se as ordens de serviço elaboradas e disponíveis.</p>
                        <img src={ConfigurationServerOrderService} alt="Configuração Servidor - Ordem de Serviço" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}