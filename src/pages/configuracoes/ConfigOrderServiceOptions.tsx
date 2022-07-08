import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ConfigOrderServiceOptions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Ordem de Serviço{" > "}Os Opções</h3>

                    <div>

                        <p>Nas telas abaixo são exibidas as opções disponíveis na janela de ordens de serviço onde se pode:</p>
                        <ul>
                            <li>Deletar</li>
                            <li>Desativar</li>
                            <li>Ativar</li>
                        </ul>
                    </div>

                    <div>
                        <img src="img/50 - configuracao-os-del.png" alt="Configuração - Ordem de Serviço - Deletar" />
                    </div>
                    <div>
                        <img src="img/50a - configuracao-os-des.png" alt="Configuração - Ordem de Serviço - Desativar" />
                    </div>
                    <div>
                        <img src="img/50b - configuracao-os-ativ.png" alt="Configuração - Ordem de Serviço - Ativar" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}