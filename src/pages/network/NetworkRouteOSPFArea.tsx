import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkRouteOSPFArea() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Roteamento{" > "}OSPF{" > "}Áreas</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações das áreas (ranges) de rede TCP/IP habilitadas para o roteamento via OSPF.</p>
                        <img src="img/41 - network-rot-ospf-areas.png" alt="Roteamento - OSPF - Áreas" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}