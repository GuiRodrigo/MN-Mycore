import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouse from "./img/ClientsMenuRightMouse.png"

export function ClientMouseMenu() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes {">"} Menu Mouse</h3>
                    <div>

                        <p> Estando no módulo clientes, ao clicar com o botão do lado direito do mouse sobre um cliente, aparecerá um Menu com opções sensíveis ao contexto dos clientes, que poderá ser utilizado para as seguintes opções:</p>

                        <ul >
                            <li>Visualizar os logins dos clientes</li>
                            <li>Visualizar os dados do clientes</li>
                            <li>Editar o mapa de geolocalização dos clientes</li>
                            <li>Visualizar fatura(s) ligadas ao clientes</li>
                            <li>Visualizar a(s) nota(s) fiscal(is) relativas aos clientes</li>
                            <li>Visualizar chamados relativos aos clientes</li>
                            <li>Visualizar materiais aplicados no atendimento aos clientes</li>
                            <li>Visualizar contratos relacionandos aos clientes</li>
                            <li>Editar os dados dos clientes</li>
                            <li>Desativar clientes.</li>
                        </ul>
                    </div>



                    <p> As opções do menu estarão habilitadas, conforme as permissões de cada usuário em seu <b>perfil de acesso</b>.
                    </p>

                    <img src={ClientsMenuRightMouse} alt="Clientes - Menu lado direito do mouse" ></img>

                </div>
            </div>
            <Footer />
        </div>
    )
}