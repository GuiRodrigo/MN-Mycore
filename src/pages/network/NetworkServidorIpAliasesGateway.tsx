import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function NetworkServidorIpAliasesGateway() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Network{" > "}Tela Principal</h3>

                    <div>
                        <p>Ao selecionar-se IP, aliases e gateway, uma tela é exibida com os campos e o botão para adicionar um IP às interfaces existentes.</p>
                        <img src="img/02 - network-ip-alias.png" alt="Módulo Network - IP - Aliases" />
                    </div>
                    <div>
                        <p>Ao selecionar-se o botão adicionar IP, uma tela é exibida com os campos pertinentes para preenchimento dessa configuração.</p>
                        <img src="img/03 - network-ip-adic.png" alt="Módulo Network - Adicionar IP" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}