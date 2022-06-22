import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientsMenuRightMouseInvoicesView1 from "./img/ClientsMenuRightMouseInvoicesView1.png"
import ClientsMenuRightMouseInvoicesView2 from "./img/ClientsMenuRightMouseInvoicesView2.png"

export function ClientMouseMenuInvoicesView() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Visualizar</h3>

                    <div>
                        <p>Na tela, abaixo, para se vizualizar a fatura, é necessário selecionar o ícone correlacionado.</p>
                        <img src={ClientsMenuRightMouseInvoicesView1} alt="Clientes - Menu lado direito do mouse - Faturas - Visualizar" ></img>
                    </div>
                    <div>
                        <p>Na tela, abaixo, a fatura está em modo de visualização para efeito de conferência.</p>
                        <img src={ClientsMenuRightMouseInvoicesView2} alt="Clientes - Menu lado direito do mouse - Faturas - Visualizar" ></img>
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}