import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import AccountPaySupplier from "./img/AccountPaySupplier.png"
import AccountPaySupplierAdd from "./img/AccountPaySupplierAdd.png"
import AccountPaySupplierMenu from "./img/AccountPaySupplierMenu.png"
import AccountPaySupplierEdit from "./img/AccountPaySupplierEdit.png"
import AccountPaySupplierDelete from "./img/AccountPaySupplierDelete.png"

export function AccountsPaySupplier() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Contas a Pagar{" > "}Fornecedor</h3>

                    <div>
                        <p>Nesta tela são visualizados os botões <b>contas a pagar</b> e <b>fornecedor</b> que ao serem pressionados exibem opções para que se execute operações, conforme a seguir:</p>
                        <img src={AccountPaySupplier} alt="Contas a Pagar - Fornecedor" />
                    </div>
                    <div>
                        <p>Utilizando o botão do lado direito do mouse é exibida a opção de <b>adicionar</b>, com a qual é possível <b>incluir</b> um fornecedor.</p>
                        <img src={AccountPaySupplierAdd} alt="Contas a Pagar - Fornecedor - Adicionar" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, a opção <b>editar</b> é exibida no menu para que os dados do fornecedor sejam eventualmente modificados.</p>
                        <img src={AccountPaySupplierMenu} alt="Contas a Pagar - Fornecedor - Menu" />
                    </div>
                    <div>
                        <p>Na tela de <b>edição</b> é possível realizar as modificações que se fizerem necessárias no fornecedor selecionada.</p>
                        <img src={AccountPaySupplierEdit} alt="Contas a Pagar - Fornecedor - Editar" />
                    </div>
                    <div>
                        <p>Utilizando o botão do lado direito do mouse é exibida também a opção de <b>deletar</b>, com a qual é possível <b>excluir</b> o fornecedor selecionado.</p>
                        <img src={AccountPaySupplierDelete} alt="Contas a Pagar - Fornecedor - Excluir" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}