import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenter(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Call Center</h3>
                    
				<div>
					<p>Nesta tela são visualizados os itens de suporte, histórico financeiro, histórico de suportes, extrato de acesso e tentativas de login. Nesta tela pode-se ainda, clicar no botão <b>todos</b> da sessão de <b>histórico financeiro</b> para se visualizar todas as faturas associadas aos clientes no sistema.</p>
           	<img src="img/12 - helpd-call-cent.png"  alt="Help Desk - Call Center"/>
                </div>    
				<div>
            <p>Clicando-se no botão <b>todos</b> da sessão de <b>histórico financeiro</b> se visualiza todas as faturas associadas aos clientes no sistema.</p>
           	<img src="img/41a - helpd-call-cent-hist-fin-tod.png" alt="Help Desk - Call Center - Histórico Financeiro - Todos"/>
                </div>    
				<div>
            <p>Visão das faturas em aberto no sistema. Podendo ainda verificar:</p>
            
                <ul >
                    <li>Baixa por retorno</li>
                    <li>Baixa manual</li>
                    <li>Baixa por Cartão de Crédito</li>
                    <li>Promessa de Pagamento</li>
                    <li>Faturas Deletadas</li>
                    <li>Todas as faturas</li>
                    <li>Deletar selecionados</li>
                    <li>Imprimir selecionados</li>
                    <li>Adicionar fatura</li>
                    <li>Selecionar todos</li>
                    <li>Desmarcar todos</li>
                    <li>Selecionadas</li>
                    <li>Visualizar fatura</li>
                    <li>Visualizar impressão</li>
                    <li>Imprimir fatura</li>
                    <li>Enviar código de barras da fatura por SMS</li>
                    <li>Enviar a fatura por E-mail</li>
                    <li>Editar fatura</li>
                    <li>Deletar fatura</li>
                    <li>Restaurar deletada</li>
                    <li>Desconto por falta de conexão</li>
                    <li>Desfazer pagamento</li>
                    <li>Desfazer remessa</li>
                    <li>Mudar para baixa manual</li>
                </ul>
            
            <img src="img/42 - helpd-call-cent-hist-fin-tod-abert.png" alt="Help Desk - Call Center - Hitórico Financeiro - Todos - Faturas Abertas"/>
                </div>
            

                </div>
            </div >
            <Footer />
        </div >
    )
}