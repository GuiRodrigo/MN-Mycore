import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDesk() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Help-Desk{" > "}Principal</h3>

                    <div>
                        <p>O módulo help-desk foi desenvolvido para gerenciar os chamados de suporte aos clientes do Provedor, integrando uma série de funções que facilitam a gestão diária dos atendimentos.</p>
                        <p>No módulo Help-Desk, pode-se:</p>

                        <ul>

                            <li>Visualizar gráficos resumo de atendimento, semanais, mensais e anuais;</li>
                            <li>Visualizar os suportes e seus detalhes, por tipo de chamado;</li>
                            <li>Pesquisar suportes fechados;</li>
                            <li>Analisar painel de suportes;</li>
                            <li>Monitorar rotas e trajetos dos atendimentos em campo;</li>
                            <li>Gerir suportes por meio do call center;</li>
                            <li>Visualizar e imprimir ordens de serviço;</li>

                        </ul>
                    </div>
                    <div>

                        <p>As opções estão dispostas conforme as abas e botões de menus apresentados abaixo:</p>
                        <img src="img/00 - help-desk.png" alt="Help-Desk - Tela Principal" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}