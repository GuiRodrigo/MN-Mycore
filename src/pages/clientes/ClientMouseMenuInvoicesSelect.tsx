import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesSelect from "./img/CustomersMenuRightMouseInvoicesSelect.png"

export function ClientMouseMenuInvoicesSelect() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Selecionar</h3>

                    <div>
                        <p>Na tela, abaixo, é visualizada a apção de se selecionar uma ou mais faturas. Utilize o check-box da última coluna para selecionar a fatura e ativar os botões <b>deletar selecionados</b> e <b>imprimir selecionados</b>.</p>
                        <img src={CustomersMenuRightMouseInvoicesSelect} alt="Clientes - Menu lado direito do mouse - Faturas - Selecionar" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}