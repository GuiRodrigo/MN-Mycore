import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterDataClient(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Call Center{" > "}Dados de Cliente</h3>
                
			<div>
					<p>Nesta tela são visualizados os campos com os dados do cliente para confirmação de informações necessárias ao prosseguimento de chamados no call center. Os dados visualizados podem ser exportados para o formato (.PDF).</p>
           	<img src="img/14 - helpd-call-cent-dad-cli-cli.png"  alt="Help Desk - Call Center - Dados Cliente" />
            </div>
            <div>
            <p>A localização geografica também está disponível na visualização para o atedimento do call center</p>
           	<img src="img/15 - helpd-call-cent-dad-cli-map.png"alt="Help Desk - Call Center - Mapa Geolocalização" />
            </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}