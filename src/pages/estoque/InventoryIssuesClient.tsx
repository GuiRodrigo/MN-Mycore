import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function InventoryIssuesClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Estoque {">"} Saída de Materiais para Cliente</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista dos materiais em estoque e que podem ser selecionados para <b>saída para o cliente</b>, onde ao se clicar com o botão do lado direito do mouse sobre um item, abre-se a opção de alterar a quantidade que dara saída.</p>
                        <p></p>
                        <img src="img/08 - estoque-sai-cli.png" alt="Saída de Materiais para Cliente" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}