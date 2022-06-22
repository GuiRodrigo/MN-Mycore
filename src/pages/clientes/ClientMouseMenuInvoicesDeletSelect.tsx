import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersAddressMenuMouseInvoicesDeleteSelected from "./img/CustomersAddressMenuMouseInvoicesDeleteSelected.png"

export function ClientMouseMenuInvoicesDeletSelect() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Deletar Selecionados</h3>

                    <div>
                        <p> Nesta tela, ao selecionar uma, ou mais faturas, a opção de <b>deletar selecionados</b> fica disponivel, possibilitando a exclusão das faturas selecionadas.</p>
                        <img src={CustomersAddressMenuMouseInvoicesDeleteSelected} alt="Clientes Endereço - Menu Mouse - Faturas - Deletar Selecionados" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}