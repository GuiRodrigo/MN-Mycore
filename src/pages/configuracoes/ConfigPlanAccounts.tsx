import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AccountPlanServerConfiguration from "./img/AccountPlanServerConfiguration.png"

export function ConfigPlanAccounts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações {">"} Plano de Contas</h3>

                    <div>
                        <p>Nesta tela são disponibilizados os campos necessários à elaboração do plano de contas, onde são definidas as contas de receitas e despesas, para controle do orçamento e caixa.</p>
                        <img src={AccountPlanServerConfiguration} alt="Configuração Servidor - Plano de Contas" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}