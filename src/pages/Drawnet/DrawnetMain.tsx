import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawnetMainScreen from "./img/DrawnetMainScreen.png"

export function DrawnetMain() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Principal</h3>

                    <div>
                        <p>O módulo do Drawnet foi desenvolvido para possibilitar a gestão, desenho e monitoramento da rede de telecomunicações dos clientes da Mycore.</p>
                        <p>No módulo do Drawnet, pode-se:</p>

                        <ul>

                            <li>Visualizar a rede;</li>
                            <li>Desenhar a rede;</li>
                            <li>Gerenciar a rede; <span>* funcionalidade dependente de integração com devices fora do MyCore</span> </li>
                            {/* style="font-size: 12px; color: red;" */}

                        </ul>
                    </div>
                    <div>
                        <p>As opções estão dispostas conforme a árvore de menus apresentada abaixo:</p>
                        <img src={DrawnetMainScreen} alt="Drawnet - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}