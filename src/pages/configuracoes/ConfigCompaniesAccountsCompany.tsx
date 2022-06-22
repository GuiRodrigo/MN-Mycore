import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerCompaniesAccountsNewCompany from "./img/ConfigurationServerCompaniesAccountsNewCompany.png"

export function ConfigCompaniesAccountsCompany() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Empresas/Contas{" > "}Nova Empresa{" > "}Empresa</h3>

                    <div>
                        <p>Campos que devem ser preenchidos para uma Nova Empresa e Responsável.</p>
                        <img src={ConfigurationServerCompaniesAccountsNewCompany} alt="Configuração Servidor - Empresas/Contas - Nova Empresa" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}