import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesOpen from "./img/ClientsMenuRightMouseInvoicesOpen.png"

export function ClientMouseMenuInvoicesOpen() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Aberto</h3>

                    <div>
                        <p>Na tela, abaixo, são visualizadas as faturas em aberto, podendo se realizar algumas tarefas, tais como:</p>

                        <ul >
                            <li>Visualizar uma fatura</li>
                            <li>Visualizar uma fatura em modo de impressão</li>
                            <li>Imprimir uma fatura</li>
                            <li>Enviar o código de barras de uma fatura por SMS</li>
                            <li>Enviar uma fatura por e-mail</li>
                            <li>Selecionar uma fatura</li>
                            <li>Deletar uma fatura selecionada</li>
                            <li>Imprimir uma fatura selecionada</li>
                            <li>Adicionar uma nova fatura</li>
                            <li>Selecionar todas as faturas</li>
                            <li>Desmarcar todas as faturas selecionadas</li>
                        </ul>

                        <img src={ClientsMenuRightMouseInvoicesOpen} alt="Clientes - Menu lado direito do mouse - Faturas em Aberto" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}