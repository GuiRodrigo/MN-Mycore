import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesMenuEdit2 from "./img/CustomersMenuRightMouseInvoicesMenuEdit2.png"
import CustomersMenuRightMouseInvoicesMenuEdit1 from "./img/CustomersMenuRightMouseInvoicesMenuEdit1.png"
import CustomersMenuRightMouseInvoicesMenuEdit3 from "./img/CustomersMenuRightMouseInvoicesMenuEdit3.png"
import CustomersMenuRightMouseInvoicesMenuEdit4 from "./img/CustomersMenuRightMouseInvoicesMenuEdit4.png"
import CustomersMenuRightMouseInvoicesMenuEdit5 from "./img/CustomersMenuRightMouseInvoicesMenuEdit5.png"

export function ClientMouseMenuInvoicesMenuEdit() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu{" > "}Editar</h3>

                    <div>
                        <p>Na telas, são apresentadas operações que se podem realizar com as faturas nas seguintes condições:. </p>

                        <ul >
                            <li>Alterar vencimento</li>
                            <li>Inserir valor adicional</li>
                            <li>Conceder desconto</li>
                            <li>Realizar baixa manual</li>
                        </ul>
                    </div>

                    <div>
                        <p>Ao editar a fatura é possível alterar a <b>data de vencimento</b>, considerando que a mesma não poderá ser anterior à data vigente.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuEdit1} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Editar"></img>
                    </div>
                    <div>
                        <p>Ao editar a fatura é possível <b>inserir um valor adicional</b> por serviços prestados ou <b>conceder desconto</b> por definições do provedor.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuEdit2} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Editar"></img>
                    </div>
                    <div>
                        <p>Na tela, abaixo, é apresentada e opção de editar a fatura para proceder eventuais modificações. </p>
                        <img src={CustomersMenuRightMouseInvoicesMenuEdit3} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Editar"></img>
                    </div>
                    <div>
                        <p>Ao se realizar o <b>fechamento</b> da fatura possível definir o <b>valor pago</b> e possíveis <b>descontos</b> concedidos, realizando uma baixa manual.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuEdit4} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Editar"></img>
                    </div>
                    <div>
                        <p>Após o fechamento da fatura, pode-se emitir o recibo para confirmação das alterações na fatura.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuEdit5} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Editar"></img>
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}