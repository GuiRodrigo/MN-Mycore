import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerRadiusGroupsBRAS from "./img/ConfigurationServerRadiusGroupsB-RAS.png"

export function ConfigRadiusGroupsBRass() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações{" > "}Grupos {"&"} Radius{" > "}B-RAS</h3>

                    <div>
                        <p>Opções para habilitar as restrição das configurações dos equipamentos específicos que ficarão disponíveis em cada grupo no <b>parâmetro Radius</b>.</p>
                        <img src={ConfigurationServerRadiusGroupsBRAS} alt="Configuração Servidor - Radius e Grupos - B-RAS" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}