import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function ConfigScreenWarnings() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Configurações{" > "}Telas de Avisos</h3>

                    <div>
                        <p>Esta é a tela onde pode-se criar aviso personalizados para serem exibidos para os clientes visualizarem em eventos especificos.</p>
                        <img src="img/50c - configuracao-tel-avi.png" alt="Configuração Servidor - Telas de Avisos" />
                    </div>

                    <div>
                        <p>Exemplo de um aviso de redução de velocidades por atraso no pagamento da fatura: </p>
                        <img src="img/50d - configuracao-tel-avi-red.png" alt="Configuração Servidor - Telas de Avisos" />
                    </div>

                    <div>
                        <p>Exemplo de um aviso de bloqueio do acesso à internet por atraso no pagamento da fatura: </p>
                        <img src="img/50e - configuracao-tel-avi-bloq.png" alt="Configuração Servidor - Telas de Avisos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}