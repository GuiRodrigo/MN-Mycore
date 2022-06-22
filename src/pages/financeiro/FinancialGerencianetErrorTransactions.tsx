import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGerencianetErrorTransaction from "./img/FinancialGerencianetErrorTransactions.png"

export function FinancialGerencianetErrorTransactions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Erro de Transações</h3>

                    <div>
                        <p>Clicando-se com o mouse sobre o item <b>Erros de Transações</b>, as informações dos eventos ocorridos, que não obtiverem êxito com as transações, ficam dispostos na tela. O conteúdo da tela pode ser exportado para os formatos do Acrobat Reader (*.PDF) e Excel (*.XLSX).</p>
                        <img src={FinancialGerencianetErrorTransaction} alt="Financeiro - Gerencianet - Erro de Transações" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}