import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkMonitoringIPConntrack() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Monitoramento{" > "}IP Conntrack</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações do tráfego de dados na interface de rede externa</p>
                        <img src="img/22 - network-mon-ip-connt.png" alt="Monitoramento - Interface de Rede - IP Conntrack" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}