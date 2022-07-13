import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskOrderService(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Ordem de Serviço</h3>
                
			<div>
					<p>Nesta tela são visualizados as ordens de serviço, criadas para os chamados que estão em andamento.</p>
           	<img src="img/43 - helpd-ord-serv.png"  alt="Help Desk - Ordem de Serviço" />
            </div>
			<div>
            <p>Pressionando o botão <b>agendamento</b>, visualiza-se um calendário onde é possivel ver os o total de agendamentos por dia.</p>
           	<img src="img/44 - helpd-ord-serv-agend.png"  alt="Ordem de Serviço - Agendamento" />
            </div>
			<div>
            <p>Pressionando o botão do lado direito do mouse, visualiza-se um menu que apresenta as opções de <b>incluir comentário</b> na OS, <b>fechar suporte</b> para uma OS, ou <b>reagendar um atendimento</b>.</p>
           	<img src="img/45 - helpd-ord-serv-ld-mouse.png"  alt="Ordem de Serviço - Menu" />
            </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}