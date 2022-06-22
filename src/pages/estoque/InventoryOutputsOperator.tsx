import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function InventoryOutputsOperator() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >


                    <h3>Módulo Estoque {">"} Saida do Operador</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista dos <b>materiais em estoque</b>, possibilitando a visualização dos materiais pertencentes ao <b>patrimônio</b> e o <b>ajuste de estoque</b>.</p>
                        <img src="img/04 - estoque-sai-oper.png" alt="Saida do Operador" />
                    </div>
                    <div>
                        <p>Ao se clicar com o botão do lado direito do mouse sobre um dos materiais, abre-se uma opção para definir a <b>quantidade</b> de itens que serão transferidos para o operador.</p>
                        <img src="img/07 - estoque-sai-oper-ldir-mous.png" alt="Saida do Operador" />
                    </div>
                    <div>
                        <p>Ao se clicar no botão <b>imprimir segunda via de formulário</b> é exibida uma janela com os operadores que estão em posse de materiais. É necessário dar um clique duplo sobre um operador para que o formulário seja gerado na tela com as opções de pré-visualizar e de imprimir.</p>
                        <img src="img/06 - estoque-sai-oper-imp.png" alt="Estoque - Imprimir" />
                    </div>
                    <div>
                        <p>Formulário gerado como resultado da solicitação de impressão, onde se pode, <b>pré-visualizar</b> a impressão ou <b>imprimí-lo</b>.</p>
                        <img src="img/06a - estoque-sai-mat-ptec.png" alt="Materiais em posse do técnico" />
                    </div>
                    <div>
                        <p>Lista para <b>validação</b> de entrada de materiais no estoque.</p>
                        <img src="img/05 - estoque-sai-oper-valid.png" alt="Validar Entrada no Estoque" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}