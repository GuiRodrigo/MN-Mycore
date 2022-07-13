import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRadiusServerActiveSessions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Radius Server{" > "}Sessões Ativas</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações das sessões ativas nos concentradores da rede. O conteúdo pode ser exportado para arquivos no formato do Acrobat Reader (*.PDF) e do Excel (*.XLSX). Além disso pode-se desconectar todas as sessões clicando-se no botão desconectar todos.</p>
                        <img src="img/09 - network-rad-sess-ativ.png" alt="Módulo Network - Radius Server - Sessões Ativas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}