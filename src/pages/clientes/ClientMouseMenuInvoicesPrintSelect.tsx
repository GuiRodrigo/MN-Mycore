import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuMouseInvoicesPrintSelected from "./img/CustomersMenuMouseInvoicesPrintSelected.png"

export function ClientMouseMenuInvoicesPrintSelect() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse {">"} Faturas {">"} Imprimir Selecionados</h3>

                    <div>
                        <p> Nesta tela, ao selecionar uma, ou mais faturas, a opção de <b>imprimir selecionados</b> fica disponivel, possibilitando a impressão das faturas selecionadas.</p>
                        <img src={CustomersMenuMouseInvoicesPrintSelected} alt="Clientes - Menu Mouse - Faturas - Imprimir Selecionados" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}