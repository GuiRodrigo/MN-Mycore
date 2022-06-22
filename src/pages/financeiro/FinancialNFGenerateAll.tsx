import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NF21GenerateAll from "./img/NF21GenerateAll.png"

export function FinancialNFGenerateAll() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Gerar Todos</h3>

                    <div>
                        <p>Nesta tela é apresentado o botão <b>gerar todos</b>, que ao ser pressionado, gera a NF 21 para todas as faturas que são listadas.</p>
                        <img src={NF21GenerateAll} alt="NF 21 - Gerar Todos" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}