import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkIP() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}IP</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações da OLT e as respectivas conexões, por placa, no equipamento.</p>
                        <img src="img/36 - network-ip.png" alt="Network - OLT > Servidor FTP" />
                    </div>
                    <div>
                        <p>Clicando-se com o botão do lado direito do mouse sobre um item da lista, abre-se uma caixa de diálogo com as opções <b>liberar ip</b> e <b>deletar</b>.</p>
                        <img src="img/37 - network-ip-ld-mous.png" alt="Network - OLT - Servidor FTP - Menu" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}