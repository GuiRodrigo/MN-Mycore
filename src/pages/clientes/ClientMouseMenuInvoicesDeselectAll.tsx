import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersAddressMenuMouseInvoicesUncheckSelected from "./img/CustomersAddressMenuMouseInvoicesUncheckSelected.png"

export function ClientMouseMenuInvoicesDeselectAll() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Desmarcar Selecionados</h3>

                    <div>
                        <p> Nesta tela, ao selecionar uma, ou mais faturas, a opção de <b>desmarcar selecionados</b> fica disponivel, possibilitando desmarcar a seleção realizada anteriormente. </p>
                        <img src={CustomersAddressMenuMouseInvoicesUncheckSelected} alt="Clientes Endereço - Menu Mouse - Faturas - Desmarcar Selecionados" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}