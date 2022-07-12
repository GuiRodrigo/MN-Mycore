import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterLogins() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Call Center{" > "}Logins</h3>

                    <div>
                        <p>Nesta opção são visualizados todas as conexões dos clientes com a Internet, bem como, o status de navegação. Nesta tela, pode-se ainda:</p>

                        <ul >
                            <li>Adicionar logins</li>
                            <li>Exibir extrato de navegação</li>
                            <li>Desconectar todos os logins</li>
                            <li>Desabilitar todos os logins</li>
                            <li>Habilitar todos os logins</li>

                        </ul>

                        <img src="img/21 - helpd-call-cent-log.png" alt="Help Desk - Call Center - Logins" />
                    </div>
                    <div>
                        <p>Ao se clicar no botão <b>adicionar</b>, a janela de acrescentar logins é aberta para preenchimento dos campos.</p>
                        <img src="img/21d - helpd-call-cent-log-adic.png" alt="Help Desk - Call Center - Logins - Adicionar" />
                    </div>
                    <div>
                        <p>Ao se clicar no botão <b>adicionar</b>, a aba de <b>fibra</b> fica disponível para ser prenchida com as informações da fibra que está ligada ao equipamento do cliente.</p>
                        <img src="img/21e - helpd-call-cent-log-adic-fib.png" alt="Help Desk - Call Center - Logins - Fibra" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre um login, pode-se verificar as configurações do login.</p>
                        <img src="img/21a - helpd-call-cent-log-log.png" alt="Help Desk - Call Center - Logins" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre um login, pode-se verificar também as configurações da fibra que está conectada ao equipamento do cliente.</p>
                        <img src="img/21b - helpd-call-cent-log-fib.png" alt="Help Desk - Call Center - Fibra" />
                    </div>
                    <div>
                        <p>Ao se clicar sobre um login, pode-se verificar o monitoramento gráfico da velocidade do link que atende ao cliente.</p>
                        <img src="img/21c - helpd-call-cent-log-graf.png" alt="Help Desk - Call Center - Gráfico" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}