import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkMonitoringPointAccessSummary() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Monitoramento{" > "}Pontos de Acesso{" > "}Resumo</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações resumidas de monitoramento do equipamento que for configurado para esse propósito.</p>
                        <img src="img/15 - network-mon-pto-acess-resu.png" alt="Monitoramento - Ponto de Acesso - Resumo" />
                    </div>
                    <div>
                        <p>Clicando-se com o botão do lado direito do mouse sobre um item de monitoramento é exibido um menu para execução de algumas operações.</p>
                        <img src="img/17 - network-mon-pto-acess-resu-ld-mous.png" alt="Monitoramento - Ponto de Acesso - Menu" />
                    </div>
                    <div>
                        <p>Selecionando-se a opção de detalhes no menu exibido, ao se clicar com o botão do lado direito do mouse, uma tela com configurações do ponto de acesso é exibida.</p>
                        <img src="img/18 - network-mon-pto-acess-resu-detal.png" alt="Monitoramento - Ponto de Acesso - Detalhe" />
                    </div>
                    <div>
                        <p>Selecionando-se a opção de editar no menu exibido, ao se clicar com o botão do lado direito do mouse, uma tela com configurações do ponto de acesso é exibida para eventuais modificações dos parâmetros.</p>
                        <img src="img/19 - network-mon-pto-acess-resu-edit.png" alt="Monitoramento - Ponto de Acesso - Editar" />
                    </div>
                    <div>
                        <p>Clicando-se sobre o botão adicionar monitoramento é exibida uma tela para inserção dos valores e parâmetros para se configurar uma novo ponto de monitoramento.</p>
                        <img src="img/16 - network-mon-pto-acess-resu-adic-mon.png" alt="Monitoramento - Ponto de Acesso - Adicionar Monitoramento" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}