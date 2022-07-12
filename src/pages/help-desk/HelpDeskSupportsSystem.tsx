import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskSupportsSystem(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Suportes do Sistema</h3>
                
			<div>
					<p>Nesta tela são visualizados os itens relacionados aos suportes que os clientes solicitam e que foram cadastrados no sistema.</p>
           	<img src="img/10a - helpd-sup-sis.png" alt="Help Desk - Suportes do Sistema" />
            </div>
            <div>
            <p>Ao se clicar no cabeçalho com a lista de <b>operadores</b>, abre-se uma caixa de diálogo, onde pode-se escolher o operador para o qual a atividade será transferida.</p>
           	<img src="img/10b - helpd-sup-sis-oper.png" alt="Help Desk - Suportes do Sistema" />
            </div>
                               

                </div>
            </div >
            <Footer />
        </div >
    )
}