import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRadiusServerDebug() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Radius Server{" > "}Depurar</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações de log das sessões dos usuários. O conteúdo pode ser exportado para arquivos no formato de figura (*.PNG).</p>
                        <img src="img/12 - network-rad-dep.png" alt="Módulo Network - Radius Server - Depurar" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}