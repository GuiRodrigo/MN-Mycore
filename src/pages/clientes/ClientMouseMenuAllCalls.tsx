import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ClientMouseMenuAllCalls() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Chamados{" > "}Todos</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizados todos os chamados registrados, no sistema, por cliente.</p>
                        <img src="img/37 - clientes-cha-tod.png" alt="Clientes - Menu lado direito do mouse - Chamados Todos"></img>
                    </div>
                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado da lista, é exibida a opção de anexar um arquivo, onde podem ser anexados exemplos de erros ou problemas que ajudem na resolução.</p>
                        <img src="img/37a - clientes-cha-anex-arq.png" alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Anexar Arquivo"></img>
                    </div>
                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado da lista, é exibida a opção de incluir comentários relativos ao chamado.</p>
                        <img src="img/37b - clientes-cha-incl-coment.png" alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Incluir Comentários"></img>
                    </div>
                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de fechar o chamado, entretanto para executar a ação é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
                        <img src="img/37c - clientes-cha-fech-cham.png" alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Fechar Chamado"></img>
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}