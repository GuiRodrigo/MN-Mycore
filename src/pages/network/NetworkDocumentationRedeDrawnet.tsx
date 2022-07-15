import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkDocumentationRedeDrawnet() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Documentação da Rede{" > "}Drawnet</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o módulo Drawnet, para visualização da rede externa o provedor.</p>
                        <img src="img/26 - network-doc-draw-view.png" alt="Documentação da Rede - Drawnet - Visualizar" />
                    </div>
                    <div>
                        <p>Nesta tela é disponibilizado o módulo Drawnet, para desenho da rede externa o provedor.</p>
                        <img src="img/26a - network-doc-net-draw.png" alt="Documentação da Rede - Drawnet - Desenhar" />
                    </div>
                    <div>
                        <p>Ao clicar-se, com o botão do lado esquerdo, em uma caixa de terminação, no desenho do mapa, é exibida uma janela com as conexões e fibras ligadas à essa caixa.</p>
                        <img src="img/26b - network-doc-cxa-ter.png" alt="Documentação da Rede - Drawnet - Desenhar - Caixa de Terminação" />
                    </div>
                    <div>
                        <p>Se houverem clientes ligados à caixa de terminação, ao clicar-se com o botão do lado direito do mouse sobre a aba clientes, são exibidos os objetos e/ou elementos ligados à essa caixa de terminação.</p>
                        <img src="img/26c - network-doc-cxa-cli.png" alt="Documentação da Rede - Drawnet - Desenhar - Caixa Cliente" />
                    </div>
                    <div>
                        <p>Ao clicar-se com o botão do lado direito do mouse sobre uma caixa de terminação é exibida uma caixa de diálogo com o botão <b>editar</b>.</p>
                        <img src="img/26d - network-doc-edit-cxa.png" alt="Documentação da Rede - Drawnet - Desenhar - Editar Caixa" />
                    </div>
                    <div>
                        <p>Ao clicar-se sobre o botão editar na caixa de diálogo é exibida a <b>mesa de fusão</b> com a qual se pode conectar as fibras aos seus elementos correspondentes.</p>
                        <img src="img/26e - network-doc-mes-fus.png" alt="Documentação da Rede - Drawnet - Desenhar - Mesa de Fusão" />
                    </div>
                    <div>
                        <p>Ao clicar-se na aba <b>editar equipamento</b> é possível inserir novos equipamentos à mesa de fusão para a sequencia do desenho da rede.</p>
                        <img src="img/26f - network-doc-adic-eqp.png" alt="Documentação da Rede - Drawnet - Desenhar - Adicionar Equipamentos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}