import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function InventoryWarehouse() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Estoque{" > "}Saída Almoxarifado</h3>

                    <div>
                        <p>Nesta tela, visualiza-se a lista dos materiais em estoque, classificados por cliente, operador, empresa, tipo e data.</p>
                        <img src="img/09 - estoque-almox.png" alt="Saída Almoxarifado" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}