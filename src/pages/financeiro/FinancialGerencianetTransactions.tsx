import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialGerencianetTransaction from "./img/FinancialGerencianetTransactions.png"

export function FinancialGerencianetTransactions() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}Financeiro{" > "}Gerencianet{" > "}Transações</h3>
                    <p>Clicando-se com o mouse sobre o item <b>Transações</b>, os campos com os eventos ocorridos com as transações ficam dispostos na tela. O conteúdo da tela pode ser exportado para os formatos do Acrobat Reader (*.PDF) e Excel (*.XLSX).</p>

                    <img src={FinancialGerencianetTransaction} alt="Financeiro - Gerencianet - Transações" />


                </div>
            </div >
            <Footer />
        </div >
    )
}