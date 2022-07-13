import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Materials() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Materiais{" > "}Principal</h3>

                    <div>
                        <p>O módulo de materiais foi desenvolvido para disponibilizar a gestão dos ativos necessários às instalações da rede física do provedor, que possibilitam a prestação dos serviçoes aos seus clientes.</p>

                        <p>No módulo de Materiais, pode-se:</p>

                        <ul >

                            <li>Verificar materiais em utilização nos serviços de campo;</li>
                            <li>Realizar acerto de materiais em estoque;</li>

                        </ul>
                    </div>

                    <div>
                        <p>Nesta tela são visualizados os itens de materiais atrelados à serviços em andamento.</p>
                        <img src="img/01 - materiais-tela.png" alt="Painel de Serviços e Materiais" />
                    </div>
                    <div>
                        <p>Clicando com o botão do lado direito do mouse sobre um item da lista de serviços, é exibido um menu para executar a operação de acerto de estoque e/ou serviço.</p>
                        <img src="img/02 - materiais-tela-ld-mous.png" alt="Painel de Serviços e Materiais - Menu" />
                    </div>
                    <div>
                        <p>Selecionando-se a opção de acerto de estoque e/ou serviço, no menu, é exibido um formulário para que se realize o acerto devido</p>
                        <img src="img/03 - materiais-tela-ld-mous-acert-esto.png" alt="Painel de Serviços e Materiais - Acerto" />
                    </div>
                    <div>
                        <p>O formulário de acerto é exibido e para confirmação de acerto de serviço, sendo necessário pressionar o botão de <b>acerto de serviços</b></p>
                        <img src="img/04 - materiais-tela-ld-mous-val-serv.png" alt="Painel de Serviços e Materiais - Acerto" />
                    </div>
                    <div>
                        <p>O formulário de acerto é exibido e para confirmação de acerto de materiais, sendo necessário pressionar o botão de <b>acerto de materiais</b></p>
                        <img src="img/05 - materiais-tela-ld-mous-val-mat.png" alt="Painel de Serviços e Materiais - Acerto" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}