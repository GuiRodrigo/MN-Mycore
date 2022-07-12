import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskPanel(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Painel</h3>
                
			<div>
					<p>Nesta tela são visualizados os itens de suporte que foram fechados, com protocolo e com atendimento concluído.</p>
            <p>No painel de análise dos chamados pode-se limpar os filtros da seleção, ou definir um filtro para a visualização, tais como: itens sem operador, com prioridade baixa, normal, alta e urgente.</p>
            </div>
			<div>
           	<img src="img/04 - helpd-painel.png" alt="Help Desk - Painel" />
            <p>Clicando-se no sinal de (+) no canto esquerdo da lista de chamados, pode-se analisar as iterações de cada chamado, por protocolo, confome tela a seguir:</p>
            </div>
			<div>
           	<img src="img/05 - helpd-painel-iter.png"  alt="Help Desk - Painel Iterações" />
            <p>Clicando-se com o mouse sobre o campo almoço são exibidas as opções para marcação de horário de início e fim de almoço.</p>
            </div>
			<div>
           	<img src="img/05a - helpd-painel-ini-hor-almoc.png" alt="Painel - Iniciar Hora Almoço" />
            <p>Clicando-se com o mouse sobre o campo hora extra são exibidas as opções para marcação de horário de início e fim de hora extra.</p>
            </div>
			<div>
           	<img src="img/05b - helpd-painel-ini-hor-extr.png" alt="Painel - Iniciar Hora Extra" />
            <p>Clicando-se com o botão do lado direito do mouse sobre os itens de chamado na tela, é exibido um menu com algumas opções para execução de operações junto aos chamados.</p>
            </div>
			<div>
           	<img src="img/06 - helpd-painel-ld-mous.png"  alt="Help Desk - Painel Menu" />
            <p>Clicando-se com o botão do lado direito do mouse sobre os itens de chamado na tela, é exibido um menu com a opção de incluir comentário no chamado para evidenciar alguma assunto relacionado.</p>
            </div>
			<div>
           	<img src="img/07 - helpd-painel-ld-mous-incl-com.png"alt="Painel - Inclui Comentário" />
            <p>Clicando-se com o botão do lado direito do mouse sobre os itens de chamado na tela, é exibido um menu com a opção de fechar o suporte para concluir o atendimento.</p>
            </div>
			<div>
           	<img src="img/08 - helpd-painel-ld-mous-fech.png" alt="Help Desk - Painel" />
            <p>Clicando-se com o botão do lado direito do mouse sobre os itens de chamado na tela, é exibido um menu com a opção de incluir um anexo de evidência para o chamado.</p>
            </div>
			<div>
           	<img src="img/09 - helpd-painel-ld-mous-anex.png" alt="Help Desk - Painel" />
            <p>Clicando-se com o botão do lado direito do mouse sobre os itens de chamado na tela, é exibido um menu com a opção de dados do cliente para eventuais correções ou modificações.</p>
            </div>
			<div>
           	<img src="img/10 - helpd-painel-ld-mous-dad-cli.png" alt="Help Desk - Painel" />
            </div>
            

                </div>
            </div >
            <Footer />
        </div >
    )
}