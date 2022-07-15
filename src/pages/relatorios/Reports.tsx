import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Reports() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Relatórios{" > "}Tela Principal</h3>

                    <div>
                        <p>O módulo de relatórios foi desenvolvido para que os provedores tenham visibilidade quantitativa e qualitativa dos serviços prestados, por meio de gráficos e listas que além de apreciadas em tela ou impressas, podem ser exportadas para planilhas para efeito de exibir as informações em outro meio de apresentação.</p>

                        <p>No módulo de Relatórios, pode-se:</p>

                        <ul >

                            <li>Analisar informações relativas aos clientes;</li>
                            <li>Apreciar informações e relatórios financeiros;</li>
                            <li>Avaliar relatórios do atendimento aos usuários do help-desk;</li>
                            <li>Analisar relatórios dos materiais em estoque;</li>
                            <li>Visualizar informações sobre contratos;</li>
                            <li>Avaliar materiais e deslocamentos realizados em suportes;</li>
                            <li>Analisar informações e relatórios de rede;</li>

                        </ul>
                    </div>
                    <div>
                        <p>As opções estão dispostas conforme os botões de menus apresentados abaixo:</p>
                        <img src="img/01 - relatorios.png" alt="Relatórios - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}