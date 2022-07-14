import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRadiusServerTerminatedSessions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Radius Server{" > "}Sessões Terminadas</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações das sessões encerradas nos concentradores da rede. O conteúdo pode ser exportado para arquivos no formato do Acrobat Reader (*.PDF) e do Excel (*.XLSX).</p>
                        <img src="img/11 - network-rad-sess-term.png" alt="Módulo Network - Radius Server - Sessões Terminadas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}