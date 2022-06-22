import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import FinancialMainScreen from "./img/FinancialMainScreen.png"

export function Financial() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Financeiro {">"} Principal</h3>

                    <div>
                        <p>O módulo financeiro foi desenvolvido para gerenciar os custos, faturamento, cobranças e movimentações financeiras realizadas pelos clientes do Mycore.</p>
                        <p>No módulo Financeiro, pode-se:</p>

                        <ul >

                            <li>Operar com faturas e remessas para bancos;</li>
                            <li>Gerar e administrar a NF 21;</li>
                            <li>Movimentar as contas a pagar;</li>
                            <li>Administrar o movimento pelo gateway Gerencianet;</li>
                            <li>Administrar o movimento pelo gateway Wide Pay;</li>
                            <li>Administrar o movimento pelo gateway Galax Pay;</li>
                            <li>Administrar o movimento pelo gateway F2B;</li>
                            <li>Administrar o movimento pelo gateway Boleto Fácil;</li>
                            <li>Administrar o movimento pelo gateway PulsarPay;</li>

                        </ul>
                    </div>
                    <div>

                        <p>As opções estão dispostas conforme as abas e botões de menus apresentados abaixo:</p>
                        <img src={FinancialMainScreen} alt="Financeiro - Tela Principal" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}