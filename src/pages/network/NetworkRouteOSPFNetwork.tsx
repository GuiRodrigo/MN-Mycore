import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRouteOSPFNetwork() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Roteamento{" > "}OSPF{" > "}Network</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações das redes TCP/IP, por área, habilitadas para o roteamento via OSPF.</p>
                        <img src="img/42 - network-rot-ospf-net.png" alt="Roteamento - OSPF - Network" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}