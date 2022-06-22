import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsDomain from "./img/ConfigurationServerRadiusGroupsDomain.png"

export function ConfigRadiusGroupsDomain() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Domínio Radius</h3>

                    <div>
                        <p>Configuração necessária para se habilitar domínios de redirecionamento para acessos em àreas especificas dos clientes.</p>
                        <img src={ConfigurationServerRadiusGroupsDomain} alt="Configuração Servidor - Radius e Grupos - Domínio" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}