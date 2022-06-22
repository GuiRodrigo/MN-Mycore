import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesAdd from "./img/CustomersMenuRightMouseInvoicesAdd.png"

export function ClientMouseMenuInvoicesAdd() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Adicionar Fatura</h3>

                    <div>
                        <p>Na tela, abaixo, é visualizado o formulário para preenchimento dos dados necessários à geração de uma nova fatura.</p>
                        <img src={CustomersMenuRightMouseInvoicesAdd} alt="Clientes - Menu lado direito do mouse - Faturas - Adicionar" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}