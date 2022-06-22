import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function StockDefineSerials() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3>Módulo Estoque {">"} Definição de Seriais</h3>

                    <div>
                        <p>Nesta tela, é exibida a lista de materiais, onde pode-se <b>definir um número serial</b> para o material em específico.</p>
                        <p>Ao se clicar com o botão do lado direito do mouse sobre um item, abre-se a opção de definir serial.</p>
                        <img src="img/11 - estoque-def-ser-menu.png" alt="Definir Seriais" />
                    </div>
                    <div>
                        <p>Ao selecionar-se a opção de definir serial é aberta uma janela para inserção do serial daquele material.</p>
                        <img src="img/11a - estoque-def-ser.png" alt="Definir Seriais" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}