import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialServerConfiguration from "./img/FinancialServerConfiguration.png"

export function ConfigProfileAccessNewUserInvoices() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Perfil de Acesso{" > "}Novo Usuário{" > "}Financeiro</h3>

                    <div>
                        <p>Opções para liberação ou restrição de acesso do usuário às configurações do módulo Financeiro.</p>
                        <img src={FinancialServerConfiguration} alt="Configuração Servidor - Financeiro" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}