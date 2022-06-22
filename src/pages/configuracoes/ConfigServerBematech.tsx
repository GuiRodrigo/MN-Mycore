import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerSearch1 from "./img/ConfigurationServerSearch1.png"
import ConfigurationServerSearch2 from "./img/ConfigurationServerSearch2.png"
import ConfigurationServerSearch3 from "./img/ConfigurationServerSearch3.png"
import ConfigurationServerSearch4 from "./img/ConfigurationServerSearch4.png"
import ConfigurationServerSearch5 from "./img/ConfigurationServerSearch5.png"
import ConfigurationServerSearch6 from "./img/ConfigurationServerSearch6.png"
import ConfigurationServerSearch7 from "./img/ConfigurationServerSearch7.png"

export function ConfigServerBematech() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Servidor{" > "}Bematech</h3>

                    <div>
                        <p>Na tela, abaixo, visualizam-se as configurações de impressoras Bematech para impressões de recibos. Para cadastrar a impressora é necessário informar o <b>nome da impressora</b> e seu <b>endereço IP</b>, clicando posteriormente no botão <b>adicionar</b>.</p>
                        <img src={ConfigurationServerSearch1} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p>Para realizar a impressão dos recibos, é necessário configurar as variáveis no <b>script de impressão</b>, conforme exemplo abaixo:</p>
                        <img src={ConfigurationServerSearch2} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p>Caso seja necessária a exclusão de alguma impressora, basta clicar no ícone com <b >x</b> na lateral direta da tela, na linha da respectiva impressora e clicar no botão <b>sim</b>.</p>
                        <img src={ConfigurationServerSearch3} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p>Para verificar os usuários que estão associados às impressoras com permissão de impressão, basta clicar na aba <b>usuários associados</b>.</p>
                        <img src={ConfigurationServerSearch4} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p>Para associar os usuários que terão permissão para impressão dos recibos nas impressoras é necessário selecionar <b>configurações{" > "}perfis de acesso{" > "}clicar com o botão do lado direito sobre o usuário{" > "}selecionar editar</b>.</p>
                        <img src={ConfigurationServerSearch5} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p><b>Selecionar financeiro{" > "}escolher a impressora que será associada ao perfil daquele usuário{" > "}e clicar no botão salvar</b></p>
                        <img src={ConfigurationServerSearch6} alt="Configuração Servidor - Pesquisa" />
                    </div>
                    <div>
                        <p>Para desassociar o usuário da impressora é necessário selecionar <b>configurações{" > "}perfis de acesso{" > "}clicar com o botão do lado direito sobre um usuário{" > "}selecionar editar{" > "}selecionar financeiro{" > "}escolher a opção com espaço em branco{" > "}e clicar no botão salvar</b>.</p>
                        <img src={ConfigurationServerSearch7} alt="Configuração Servidor - Pesquisa" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}