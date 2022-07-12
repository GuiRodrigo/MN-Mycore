import { Footer } from "../../components/footer"
import { Menu } from "../../components/Menu"

export function HelpDeskMonitoring(){
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                <h3>Módulo Help-Desk{" > "}Monitoramento</h3>
                
			<div>
					<p>Nesta tela é visualizado o mapa de geolocalização com as rotas seguidas pelos técnicos em campo.</p>
           	<img src="img/11 - helpd-monit.png"  alt="Help Desk - Monitoramento - Rotas" />
            </div>
            

                </div>
            </div >
            <Footer />
        </div >
    )
}