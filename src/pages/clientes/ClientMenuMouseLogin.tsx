import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseLogins from "./img/ClientsMenuRightMouseLogins.png"
import ClientsMenuRightMouseLoginsRelease from "./img/ClientsMenuRightMouseLoginsRelease.png"
import ClientsMenuRightMouseLoginsDisconnectAll from "./img/ClientsMenuRightMouseLoginsDisconnectAll.png"
import ClientsMenuRightMouseLoginsDisableAll from "./img/ClientsMenuRightMouseLoginsDisableAll.png"
import ClientsMenuRightMouseLoginEnableAll from "./img/ClientsMenuRightMouseLoginEnableAll.png"

export function ClientMenuMouseLogin() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Logins</h3>


                    <div>
                        <div>
                            <p> Ao selecionar a opção de <b>Logins</b> no menu do mouse, a tela referente aos usuários conectados e/ou desconectados será exibida. Na tela há botões para <b>adicionar</b> logins, ver <b>extrato</b> dos clientes, o botão para <b>desconectar todos</b>, o botão para <b>desabilitar todos</b> e o botão para <b>habilitar todos</b> os logins listados.</p>
                            <img src={ClientsMenuRightMouseLogins} alt="Clientes - Menu lado direito do mouse - Logins" className="view_images shadow"></img>
                        </div>
                        <div>
                            <p>Caso o cliente esteja com <b>pendência financeira automática</b> será habilitado o botão para <b>liberar acesso adicional</b>. Essa opção liberará um número adicional de dias para continuar acessando a internet, sem alterar os parâmetros e data para pagamento da fatura.</p>
                            <img src={ClientsMenuRightMouseLoginsRelease} alt="Clientes - Menu lado direito do mouse - Logins - Liberar" className="view_images shadow"></img>
                        </div>
                        <div>
                            <p>Em caso de necessidade pode-se desconetar todos os logins existentes para o usuários, clicando no botão <b>desconectar todos</b>.</p>
                            <img src={ClientsMenuRightMouseLoginsDisconnectAll} alt="Clientes - Menu lado direito do mouse - Logins - Desconectar Todos" className="view_images shadow"></img>
                        </div>
                        <div>
                            <p>Em caso de necessidade pode-se desabilitar todos os logins existentes para o usuários, clicando no botão <b>desabilitar todos</b>.</p>
                            <img src={ClientsMenuRightMouseLoginsDisableAll} alt="Clientes - Menu lado direito do mouse - Logins - Desabilitar Todos" className="view_images shadow"></img>
                        </div>
                        <div>
                            <p>Em caso de necessidade pode-se habilitar todos os logins para o usuários, clicando no botão <b>habilitar todos</b>.</p>
                            <img src={ClientsMenuRightMouseLoginEnableAll} alt="Clientes - Menu lado direito do mouse - Logins - Habilitar Todos" className="view_images shadow"></img>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}