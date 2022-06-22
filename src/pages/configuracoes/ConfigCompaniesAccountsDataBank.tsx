import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerCompaniesAccountsNewCompanyBankingData from "./img/ConfigurationServerCompaniesAccountsNewCompanyBankingData.png"

export function ConfigCompaniesAccountsDataBank() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Empresas/Contas{" > "}Nova Empresa{" > "}Dados Bancários</h3>

                    <div>
                        <p>Campos dos dados bancários que devem ser preenchidos para a impressão dos boletos bancários e geração da remessa.</p>
                        <img src={ConfigurationServerCompaniesAccountsNewCompanyBankingData} alt="Configuração Servidor - Empresas/Contas - Nova Empresa - Dados Bancários" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}