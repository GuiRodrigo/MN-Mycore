import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerContractsExistingContracts from "./img/ConfigurationServerContractsExistingContracts.png"

export function ConfigContractsExisting() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Contratos{" > "}Contratos Existentes</h3>

                    <div>
                        <p>Modelo de contrato já elaborado e em vigência. No corpo do texto estará disponível as variáveis que serão utilizadas no preenchimento automático do contrato.</p>
                        <img src={ConfigurationServerContractsExistingContracts} alt="Configuração Servidor - Contratos - Contratos Existentes" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}