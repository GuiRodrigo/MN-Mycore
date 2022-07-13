import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterNewCustomer (){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Call Center{" > "}Dados de Cliente</h3>
                    
				<div>
					<p>Nesta tela são visualizados os campos com os <b>dados do cliente</b> para o seu preenchimento cadastral.</p>
           	<img src="img/32 - helpd-call-cent-ncli-dad-cli.png"  alt="Help Desk - Call Center - Dados Cliente" />
                </div> 
				<div>
            <p>Os campos para preenchimento das informações de <b>endereço</b> ficam disponíveis na aba de endereço.</p>
           	<img src="img/33 - helpd-call-cent-ncli-end.png"  alt="Help Desk - Call Center - Endereço" />
                </div> 
				<div>
            <p>Os campos para preenchimento das informações de <b>contato</b> ficam disponíveis na aba de contato.</p>
           	<img src="img/34 - helpd-call-cent-ncli-cont.png"  alt="Help Desk - Call Center - EndereContatoço" />
                </div> 
				<div>
            <p>Os campos para preenchimento das informações de <b>automação</b> ficam disponíveis na aba de automação.</p>
           	<img src="img/35 - helpd-call-cent-ncli-aut.png"  alt="Help Desk - Call Center - Automação" />
                </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}