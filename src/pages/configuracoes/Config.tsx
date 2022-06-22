import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Config() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Principal</h3>
                    <div>
                        <p>O módulo de configurações foi desenvolvido para gerenciar o comportamento das telas e recursos do MyCore, atribuindo funções para os usuários de acordo com seus perfis e habilitando funcionalidades do sistema de acordo com as necessidades e serviços contratados pelos clientes.</p>
                    </div>

                    <div>
                        <p>No módulo de Configurações, pode-se:</p>

                        <ul >

                            <li>Configurar as funções do servidor;</li>
                            <li>Definir perfis dos usuários;</li>
                            <li>Parametrizar empresas e contas;</li>
                            <li>Configurar o aplicativo de campo;</li>
                            <li>Habilitar o serviço de API;</li>
                            <li>Parametrizar grupos e radius;</li>
                            <li>Configurar contratos;</li>
                            <li>Parametrizar ordens de serviço;</li>
                            <li>Criar telas com avisos personalizados;</li>
                            <li>Definir rotinas e ações de backup;</li>
                            <li>Parametrizar o serviço de SMS;</li>
                            <li>Parametrizar o serviço de SMTP;</li>
                            <li>Parametrizar o serviço do Telegram;</li>
                            <li>Parametrizar mensagens do WhatsApp;</li>
                            <li>Definir o plano de contas;</li>
                            <li>Configurar os gateways de pagamento digital;</li>

                        </ul>
                    </div>

                    <div>
                        <p>As configurações estão dispostas conforme a árvore de menus apresentada abaixo:</p>
                        <img src="img/00 - configuracoes.png" alt="Configurações - Tela Principal" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}