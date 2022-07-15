import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkOLTDatacom() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}OLT{" > "}Datacom</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações da OLT e as respectivas conexões, por placa, no equipamento.</p>
                        <img src="img/27 - network-olt-data.png" alt="Network - OLT - Datacom" />
                    </div>
                    <div>
                        <p>Ao clicar no botão <b>Adicionar OLT</b> é exibida uma caixa de diálogo para inserção dos parãmetros necessários à inclusão de uma nova OLT.</p>
                        <img src="img/27a - network-olt-data-adic.png" alt="Network - OLT - Datacom" />
                    </div>
                    <div>
                        <p>Clicando-se sobre um item de OLT cadastrada, abre-se uma janela com as portas e as placas GPON que estão associadas à OLT.</p>
                        <img src="img/27b - network-olt-data-view-gpon.png" alt="Network - OLT - Datacom - Ver GPON" />
                    </div>
                    <div>
                        <p>Clicando-se sobre um item uma porta das placas GPON, abre-se uma janela com as propriedades dessa porta para eventuais modificações.</p>
                        <img src="img/27c - network-olt-data-edit-gpon.png" alt="Network - OLT - Datacom - Editar GPON" />
                    </div>
                    <div>
                        <p>Clicando-se sobre o botão <b>Srv Profile</b>, abre-se uma janela para cadastramento de um script.</p>
                        <img src="img/28 - network-olt-data-serv-prof.png" alt="Network - OLT - Datacom  - Server Profile" />
                    </div>
                    <div>
                        <p>Clicando-se sobre o botão <b>Line Profile</b>, abre-se uma janela para cadastramento de um script.</p>
                        <img src="img/29 - network-olt-data-line-prof.png" alt="Network - OLT - Datacom - Line Profile" />
                    </div>
                    <div>
                        <p>Clicando-se sobre o botão <b>Srv vLans</b>, abre-se uma janela para cadastramento de uma VLAN.</p>
                        <img src="img/30 - network-olt-data-serv-vlan.png" alt="Network - OLT - Datacom - Server VLAN" />
                    </div>
                    <div>
                        <p>Clicando-se sobre o botão <b>User vLans</b>, abre-se uma janela para cadastramento de uma VLAN.</p>
                        <img src="img/31 - network-olt-data-usr-vlan.png" alt="Network - OLT - Datacom - User VLAN" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}