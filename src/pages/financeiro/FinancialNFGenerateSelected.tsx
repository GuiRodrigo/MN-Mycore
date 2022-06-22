import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ReturnSelected from "./img/ReturnSelected.png"

export function FinancialNFGenerateSelected() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Gerar Selecionados</h3>

                    <div>
                        <p>Nesta tela é apresentado o botão <b>gerar selecionados</b>, que ao ser pressionado, gera a NF 21 para a fatura selecionada, dentre as listadas.</p>
                        <img src={ReturnSelected} alt="Retorno" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}