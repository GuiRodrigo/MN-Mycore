import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import DrawNetworkRegistrationCableEquipment from "./img/DrawNetworkRegistrationCableEquipment.png"
import DrawnetDrawNetworkRegistrationDio from "./img/DrawnetDrawNetworkRegistrationDio.png"
import DrawnetDrawNetworkRegisterSplitter from "./img/DrawnetDrawNetworkRegisterSplitter.png"

export function DrawnetDrawNetworkRegistrationCablesEquipment() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Drawnet{" > "}Desenhar Rede{" > "}Cadastro de Cabos e Equipamentos</h3>

                    <div>
                        <p>Nesta tela é disponibilizado o modo de cadastro e desenho de cabos e equipamentos de rede.</p>
                        <img src={DrawNetworkRegistrationCableEquipment} alt="Drawnet - Desenhar Rede - Cadastro de Cabos e Equipamentos" />
                        <img src={DrawnetDrawNetworkRegistrationDio} alt="Drawnet - Desenhar Rede - Cadastro de DIO" />
                        <img src={DrawnetDrawNetworkRegisterSplitter} alt="Drawnet - Desenhar Rede - Cadstro de Spliter" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}