import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseOpenCalls from "./img/CustomersMenuRightMouseOpenCalls.png"
import CustomersMenuRightMouseOpenCallsAttachFile from "./img/CustomersMenuRightMouseOpenCallsAttachFile.png"
import CustomersMenuLawMouseOpenCallsIncludeComments from "./img/CustomersMenuLawMouseOpenCallsIncludeComments.png"
import CustomersMenuLawMouseOpenCallsCloseCalls from "./img/CustomersMenuLawMouseOpenCallsCloseCalls.png"

export function ClientMouseMenuOpenCalls() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Chamados{" > "}Abertos</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizados os chamados abertos, no sistema, por cliente.</p>
                        <img src={CustomersMenuRightMouseOpenCalls} alt="Clientes - Menu lado direito do mouse - Chamados Abertos" ></img>
                    </div>

                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de anexar um arquivo, onde podem ser anexados exemplos de erros ou problemas que ajudem na resolução.</p>
                        <img src={CustomersMenuRightMouseOpenCallsAttachFile} alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Anexar Arquivo" ></img>
                    </div>

                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de incluir comentários relativos ao chamado.</p>
                        <img src={CustomersMenuLawMouseOpenCallsIncludeComments} alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Incluir Comentários" ></img>

                    </div>
                    <div>
                        <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de fechar o chamado, entretanto para executar a ação é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
                        <img src={CustomersMenuLawMouseOpenCallsCloseCalls} alt="Clientes - Menu lado direito do mouse - Chamados Abertos - Fechar Chamado" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}