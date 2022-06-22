import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuMouseSelectAll from "./img/ClientsMenuMouseSelectAll.png"

export function ClientMouseMenuInvoicesSelectAll() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Selecionar Todas</h3>

                    <div>
                        <p>Nesta tela, é possivel selecionar-se <b>todas as faturas</b> para se executar múltiplas operações com as faturas.</p>
                        <img src={ClientsMenuMouseSelectAll} alt="Clientes - Menu Mouse - Selecionar Todas" ></img>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}