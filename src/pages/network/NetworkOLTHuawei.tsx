import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkOLTHuawei() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}OLT{" > "}Huawei</h3>

                    <div>
                        <p>Nesta tela são exibidas as informações da OLT e as respectivas conexões, por placa, no equipamento.</p>
                        <img src="img/32 - network-olt-huaw.png" alt="Network - OLT - Huawei" />
                    </div>
                    <div>
                        <p>Clicando no botão <b>Adicionar OLT</b> é exibida uma caixa de diálogo para inserção dos parâmetros e inclusão da OLT.</p>
                        <img src="img/33 - network-olt-huaw-adic.png" alt="Network - OLT - Huawei" />
                    </div>
                    <div>
                        <p>Clicando-se na representação de uma OLT, abre-se uma tela com a apresentação das portas das placas GPON que compõem a OLT.</p>
                        <img src="img/34 - network-olt-huaw-vis.png" alt="Network - OLT > Huawei" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}