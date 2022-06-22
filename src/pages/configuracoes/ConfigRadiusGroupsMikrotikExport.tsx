import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsMikrotikExport from "./img/ConfigurationServerRadiusGroupsMikrotikExport.png"

export function ConfigRadiusGroupsMikrotikExport() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}Mikroti{"k"} Export</h3>

                    <div>
                        <p>Campos necessários a serem preenchidos para geração de um script de exportação para o Mikrotik, permitindo que em caso de manutenção no servidor os clientes sejam autenticados diretamente no Mikrotik.</p>
                        <img src={ConfigurationServerRadiusGroupsMikrotikExport} alt="Configuração Servidor - Radius e Grupos - Mikrotik Export" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}