import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Network() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Network{" > "}Principal</h3>

                    <div>
                        <p>O módulo de network foi desenvolvido para promover a gestão da rede interna e de telecomunicações dos provedores, disponibilizando vários recursos de monitoramento.</p>

                        <p>No módulo de Network, pode-se realizar:</p>

                        <ul >

                            <li>Monitoramento de Ponto de Acesso;</li>
                            <li>Monitoramento de Sessões Ativas e Encerradas;</li>
                            <li>Monitoramento de conexões nos Concentradores;</li>
                            <li>Monitoramento de Interfaces;</li>
                            <li>Monitoramento de Logins;</li>
                            <li>Depuração;</li>
                            <li>Desenho de Rede;</li>
                            <li>Provisionamento de OLTs;</li>

                        </ul>
                    </div>
                    <div>
                        <p>As opções estão dispostas conforme a árvore de menus apresentada abaixo:</p>
                        <img src="img/00 - network.png" alt="Network - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}