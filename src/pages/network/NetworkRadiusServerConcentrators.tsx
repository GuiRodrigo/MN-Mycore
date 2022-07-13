import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRadiusServerConcentrators() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Radius Server{" > "}Concentradores</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações dos concentradores e suas sessões de internet, com os botões adicionar, deletar, sincronizar, reiniciar, exportar para PNG e desconectar todos.</p>
                        <img src="img/06 - network-rad-conc.png" alt="Módulo Network - Radius Server - Concentradores" />
                    </div>
                    <div>
                        <p>Esta tela exibe as informações relativas às conexões estabelecidas via Radius. O conteúdo da tela pode ser exportado para o formato de planiha do Excel (.XLSX) e de figura (*.PNG). Clicando sobre o botão desconectar todos as conexões do Radius serão encerradas.</p>
                        <img src="img/08 - network-rad-conc-vis.png" alt="Módulo Network - Radius Server - Visualizar" />
                    </div>
                    <div>
                        <p>Nesta tela deve-se preencher as informações necessárias para adicionar um concentrador Radius ao ambiente.</p>
                        <img src="img/04 - network-ips-adic.png" alt="Módulo Network - Radius Server - Concentradores - Adicionar" />
                    </div>
                    <div>
                        <p>Nesta pode-se excluir um concentrador Radius do ambiente.</p>
                        <img src="img/07a - network-rad-conc-del.png" alt="Módulo Network - Radius Server - Concentradores" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}