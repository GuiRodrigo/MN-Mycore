import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ImportNFe55 from "./img/ImportNFe55.png"

export function StockImportNF() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >


                    <h3>Módulo Estoque{" > "}Importar NF-e 55</h3>

                    <div>
                        <p>Nesta tela, são exibidos ícones sobre os quais se podem clicar para importar um arquivo XML da <b>NF-e 55</b>.</p>
                        <img src={ImportNFe55} alt="Importar NF-e 55" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}