import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkPPoESActiveSessions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}PPoE/IPoE Server{" > "}Sessões Ativas</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações das sessões ativas dos clientes via PPoE(Point-to-Point Protocol over Ethernet).</p>
                        <img src="img/46 - network-ppoe-sess-ativ.png" alt="PPoE/IPoE Server - Sessões Ativas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}