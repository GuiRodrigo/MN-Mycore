import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerCompaniesAccounts1 from "./img/ConfigurationServerCompaniesAccounts1.png"
import ConfigurationServerCompaniesAccounts2 from "./img/ConfigurationServerCompaniesAccounts2.png"
import ConfigurationServerCompaniesAccounts3 from "./img/ConfigurationServerCompaniesAccounts3.png"
import ConfigurationServerCompaniesAccounts4 from "./img/ConfigurationServerCompaniesAccounts4.png"
import ConfigurationServerCompaniesAccounts5 from "./img/ConfigurationServerCompaniesAccounts5.png"
import ConfigurationServerCompaniesAccounts6 from "./img/ConfigurationServerCompaniesAccounts6.png"

export function ConfigCompaniesAccounts() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Empresas/Contas</h3>

                    <div>
                        <p>Na tela, abaixo, realiza-se a configuração relativa às Empresas e Contas Bancárias.</p>
                        <img src={ConfigurationServerCompaniesAccounts1} alt="Configuração Servidor - Empresas/Contas" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, ao clicar com o botão do <b>lado direito do mouse</b>, sobre um item, é exibido um sub-menu para seleção de opções.</p>
                        <img src={ConfigurationServerCompaniesAccounts2} alt="Configuração Servidor - Empresas/Contas - Menu Mouse" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, após selecionar a opção <b>visualizar clientes</b> no sub-menu do mouse, são exibidos os clientes referentes à empresa selecionada.</p>
                        <img src={ConfigurationServerCompaniesAccounts3} alt="Configuração Servidor - Empresas/Contas - Menu Mouse - Clientes" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, após selecionar a opção <b>editar</b> no sub-menu do mouse, são exibidos os dados da empresa selecionada.</p>
                        <img src={ConfigurationServerCompaniesAccounts4} alt="Configuração Servidor - Empresas/Contas - Menu Mouse - Empresas" />
                    </div>
                    <div>
                        <p>Após selecionar a opção <b>editar</b> no sub-menu do mouse, são exibidos os dados da empresa selecionada e ao clicar na aba, <b>dados bancários</b> as informações pertinentes são exibidas.</p>
                        <img src={ConfigurationServerCompaniesAccounts5} alt="Configuração Servidor - Empresas/Contas - Menu Mouse - Dados Bancários" />
                    </div>
                    <div>
                        <p>Após selecionar a opção <b>deletar</b> no sub-menu do mouse, é exibida uma caixa de diálogo com a pergunta para confirmação ou não da exclusão da empresa selecionada.</p>
                        <img src={ConfigurationServerCompaniesAccounts6} alt="Configuração Servidor - Empresas/Contas - Menu Mouse - Deletar" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}