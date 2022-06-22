import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerContractsNewContract from "./img/ConfigurationServerContractsNewContract.png"

export function ConfigContractsNew() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Contratos{" > "}Novo Contrato</h3>

                    <div>
                        <p>Nesta tela é exibido o pop-up onde deve ser inserido o nome de um novo contrato.</p>
                        <img src={ConfigurationServerContractsNewContract} alt="Configuração Servidor - Contratos - Novo Contrato" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}