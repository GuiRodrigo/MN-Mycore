import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGerencianetDebugAnswers from "./img/FinancialGerencianetDebugAnswers.png"

export function FinancialGerencianetDebugAnswer() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Debug Resposta</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Debug Resposta</b>, as informações analíticas dos eventos ocorridos, que obtiverem êxito com as transações, ficam dispostos na tela. O conteúdo da tela pode ser exportado para os formatos do Acrobat Reader (*.PDF) e Excel (*.XLSX).</p>
                        <img src={FinancialGerencianetDebugAnswers} alt="Financeiro - Gerencianet - Debug Resposta" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}