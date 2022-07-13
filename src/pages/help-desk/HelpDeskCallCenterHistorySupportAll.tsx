import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterHistorySupportAll(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Meus Suportes{" > "}Histórico de Chamados</h3>
                
			<div>
					<p>Nesta tela são visualizados os itens de suporte, histórico financeiro, histórico de suportes, extrato de acesso e tentativas de login.</p>
            <p>Na tela de abertura de suporte, clicando-se com o botão do lado direito do mouse sobre o histórico de chamados, pode-se incluir um comentário ou fechar-se o suporte.</p>
           	<img src="img/13c - helpd-call-cent-abr-sup-incl-com.png"  alt="Help Desk - Call Center - Incluir Comentários" />
           	<img src="img/13d - helpd-call-cent-abr-sup-incl-com-fech-cham.png" alt="Help Desk - Call Center - Fechamento Suporte" />
            </div>
			<div>
            <p>Ao se clicar no botão <b>adicionar anexo</b> no histórico de suportes abre-se a janela do sistema operacional para escolha do arquivo para o upload.</p>            
           	<img src="img/40 - helpd-sup-adic-anex.png"alt="Help Desk - Meus Suportes" />
            </div>
			<div>
            <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de anexar um arquivo, onde podem ser anexados exemplos de erros ou problemas que ajudem na resolução.</p>
           	<img src="img/40a - helpd-sup-adic-anex-upl.png"  alt="Help Desk - Meus Suportes - Anexar Arquivo" />
            </div>
			<div>
            <p>Ao clicar com o botão do lado direito do mouse sobre um chamado aberto, é exibida a opção de fechar o chamado, entretanto para executar a ação é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
           	<img src="img/40b - helpd-sup-motiv-fech-sup.png"  alt="Help Desk - Meus Suportes - Fechar Suporte" />
            </div>
			<div>
            <p>Ao se clicar no botão <b>todos</b> no histórico de suportes abre-se a janela de status dos chamados.</p>
           	<img src="img/41 - helpd-sup-hist-sup-tod.png"alt="Help Desk - Meus Suportes" />
            </div>
			<div>
            <p>Nesta tela são visualizados os itens de <b>suporte</b> e o histórico de suportes com os chamados em <b>aberto</b>. Ao clicar com o botão do lado direito do mouse sobre um chamado, são exibidas as opções <b>anexar arquivo</b>, <b>incluir comentário</b> e <b>fechar chamado</b>, entretanto para executar a ação de fechar chamado é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
           	<img src="img/37 - helpd-meu-sup-hist-cha-abe.png"  alt="Help Desk - Meus Suportes - Chamados Abertos" />
            </div>
			<div>
           	<img src="img/38 - helpd-meu-sup-hist-cha-fech.png"  alt="Help Desk - Meus Suportes - Chamados Fechados" />
            <p>Nesta tela são visualizados os itens de suporte com os chamados <b>fechados</b>. Ao clicar com o botão do lado direito do mouse sobre um chamado, são exibidas as opções <b>anexar arquivo</b>, <b>incluir comentário</b> e <b>fechar chamado</b>, entretanto para executar a ação de fechar chamado é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
            </div>
			<div>
            <p>Nesta tela são visualizados os itens de suporte com os chamados <b>todos os chamados</b>. Ao clicar com o botão do lado direito do mouse sobre um chamado, são exibidas as opções <b>anexar arquivo</b>, <b>incluir comentário</b> e <b>fechar chamado</b>, entretanto para executar a ação de fechar chamado é necessário escolher um dos motivos cadastrados em <b>configuração{" > "}servidor{" > "}help desk{" > "}motivos de fechamento</b>.</p>
           	<img src="img/39 - helpd-meu-sup-hist-cha-tod.png"  alt="Help Desk - Meus Suportes - Chamados Todos" />
            </div>
            

                </div>
            </div >
            <Footer />
        </div >
    )
}