import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NF21ChooseRecords from "./img/NF21ChooseRecords.png"

export function FinancialNFChooseRegister() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Financeiro{" > "}NF 21{" > "}Escolher Registros</h3>

                    <div>
                        <p>Nesta tela está disponibilizado o botão <b>escolher registro</b>, que uma vez pressionado, abrirá os parâmetros necessários para exibição dos registros das notas.</p>
                        <img src={NF21ChooseRecords} alt="NF 21 - Escolher Registros" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}