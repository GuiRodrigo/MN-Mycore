import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersContact from "./img/CustomersContact.png"

export function AddContactCliente() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Novo Cliente{" > "}Contatos</h3>

                    <div>
                        <p> Neste aba devem ser adicionadas as informações de contato do cliente. Nesta tela é importante salientar que o telefone de contato do cliente é obrigatório e sem essa informação o cadastro não é efetivado.</p>

                        <img src={CustomersContact} alt="Clientes Contato" className="view_images shadow"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}