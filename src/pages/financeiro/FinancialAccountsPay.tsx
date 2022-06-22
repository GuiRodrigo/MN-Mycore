import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import BillsToPay from "./img/BillsToPay.png"
import AccountPayAddAccount from "./img/AccountPayAddAccount.png"
import AccountPayEditAccount from "./img/AccountPayEditAccount.png"
import AccountPayViewAccount from "./img/AccountPayViewAccount.png"
import AccountPayDeleteAccount from "./img/AccountPayDeleteAccount.png"
import AccountPayAttachAccount from "./img/AccountPayAttachAccount.png"
import AccountPaySelectAccount1 from "./img/AccountPaySelectAccount1.png"
import AccountPaySelectAccount2 from "./img/AccountPaySelectAccount2.png"
import AccountPaySelectAccount3 from "./img/AccountPaySelectAccount3.png"
import AccountPaySelectAccount4 from "./img/AccountPaySelectAccount4.png"

export function FinancialAccountsPay() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Contas a Pagar</h3>

                    <div>
                        <p>Nesta tela estão disponíveis as informação das <b>contas a pagar</b> com suas respectivas datas de vencimento e status.</p>
                        <img src={BillsToPay} alt="Contas a Pagar" />
                    </div>
                    <div>
                        <p>Ao pressionar o botão <b>adicionar</b> uma janela será aberta com os campos necessários para preenchimento e inclusão de uma nova conta a pagar.</p>
                        <img src={AccountPayAddAccount} alt="Contas a Pagar - Adicionar Conta" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse, a opção <b>editar</b> é exibida no menu para que os dados da conta a pagar sejam eventualmente modificados.</p>
                        <img src={AccountPayEditAccount} alt="Contas a Pagar - Editar Conta" />
                    </div>
                    <div>
                        <p>Na tela de edição é possível realizar as modificações que se fizerem necessárias na conta a pagar selecionada.</p>
                        <img src={AccountPayViewAccount} alt="Contas a Pagar - Visualizar Conta" />
                    </div>
                    <div>
                        <p>Utilizando o botão do lado direito do mouse é exibida também a opção de <b>deletar</b>, com a qual é possível <b>excluir</b> a conta a pagar selecionada.</p>
                        <img src={AccountPayDeleteAccount} alt="Contas a Pagar - Excluir Conta" />
                    </div>
                    <div>
                        <p>Utilizando o botão do lado direito do mouse é exibida também a opção de <b>anexar</b>, com a qual é possível <b>incluir</b> uma nota fiscal no contas a pagar.</p>
                        <img src={AccountPayAttachAccount} alt="Contas a Pagar - Anexar Nota" />
                    </div>
                    <div>
                        <p>Após selecionar a opção de anexar a nota fiscal, deve-se selecionar o botão de <b>upload de arquivo</b> para selecionar-se o arquivo com a nota que será anexada ao contas a pagar.</p>
                        <img src={AccountPaySelectAccount1} alt="Contas a Pagar - Selecionar Arquivo" />
                    </div>
                    <div>
                        <p>Clicando-se no ícone com desenho de visualização <b>(olho)</b>, abre-se uma janela com a lista de arquivos referentes àquela conta.</p>
                        <img src={AccountPaySelectAccount2} alt="Contas a Pagar - Selecionar Arquivo" />
                    </div>
                    <div>
                        <p>Dentro da janela de visualização de arquivos de contas, ao se clicar sobre um item <b>em formato PDF</b>, abre-se o arquivo para leitura.</p>
                        <img src={AccountPaySelectAccount3} alt="Contas a Pagar - Selecionar Arquivo" />
                    </div>
                    <div>
                        <p>Dentro da janela de visualização de arquivos de contas, ao se clicar sobre um item <b>em formato IMG</b>, abre-se o arquivo de imagem para leitura.</p>
                        <img src={AccountPaySelectAccount4} alt="Contas a Pagar - Selecionar Arquivo" />
                    </div>



                </div>
            </div >
            <Footer />
        </div >
    )
}