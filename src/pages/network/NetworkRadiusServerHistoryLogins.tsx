import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRadiusServerHistoryLogins() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Radius Server{" > "}Histórico de Logins</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações do histórico dos logins dos usuários nos concentradores da rede. O conteúdo pode ser exportado para arquivos no formato do Acrobat Reader (*.PDF) e do Excel (*.XLSX).</p>
                        <img src="img/13 - network-rad-hist-log.png" alt="Módulo Network - Radius Server - Histórico Logins" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}