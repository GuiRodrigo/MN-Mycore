import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function MyBox() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Meu Caixa{" > "}Tela Principal</h3>

                    <div>
                        <p>O módulo Meu Caixa foi desenvolvido para disponibilizar a análise das receitas e despesas em consonância com o plano de contas.</p>

                        <p>No módulo Meu Caixa, pode-se:</p>

                        <ul >

                            <li>Analisar as receitas cujos lançamentos foram realizados pelo usuário;</li>
                            <li>Analisar as despesas do provedor;</li>
                            <li>Analisar o saldo entre receitas e despesas de acordo com o plano de contas;</li>

                        </ul>
                    </div>
                    <div>
                        <p>Nesta tela são visualizados os itens de movimentação financeira por plano de contas.</p>
                        <img src="img/01 - meu-caixa-tela-princ.png" alt="Meu Caixa - Tela Principal" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}