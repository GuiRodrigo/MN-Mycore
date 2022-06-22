import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ClientData from "./img/ClientData.png"
import DataClientTypeClient from "./img/DataClientTypeClient.png"
import CustomerDataTypeUse from "./img/CustomerDataTypeUse.png"
import CustomerDataContracts from "./img/CustomerDataContracts.png"
import CustomerDataAccessGroup from "./img/CustomerDataAccessGroup.png"
import CustomerDataTechnology from "./img/CustomerDataTechnology.png"
import CustomerDataHow from "./img/CustomerDataHow.png"

export function AddDataClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Clientes{" > "}Novo Cliente{" > "}Dados do Cliente</h3>
                    <div>
                        <p> Nesta aba devem ser adicionados todos os dados referentes ao cliente.</p>

                        <img src={ClientData} alt="Dados do Cliente" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de tipo de cliente, abaixo, deve-se escolher a natureza do cliente conforme os padrões da N.F. tipo 21. </p>
                        <img src={DataClientTypeClient} alt="Dados do Cliente - Tipo de Cliente" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de tipo de utilização, abaixo, deve-se escolher qual é o tipo de serviço que atende ao cliente, conforme padrão da N.F. tipo 21 </p>
                        <img src={CustomerDataTypeUse} alt="Dados do Cliente - Tipo de Utilização" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de contratos, abaixo, deve-se escolher o tipo de contrato ligado a natureza de operação que atende ao cliente.</p>
                        <img src={CustomerDataContracts} alt="Dados do Cliente - Contratos" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de grupo de acesso, abaixo, deve-se escolher o tipo de plano/velocidade ligado a natureza de operação que atende ao cliente.</p>
                        <img src={CustomerDataAccessGroup} alt="Dados do Cliente - Grupo de Acesso" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de tecnologia, abaixo, deve-se escolher dentre as existentes, aquela ligada a natureza de operação que atende ao cliente.</p>
                        <img src={CustomerDataTechnology} alt="Dados do Cliente - Tecnologia" className="view_images shadow"></img>
                    </div>

                    <div>
                        <p>Na opção de <b>como você ficou sabendo sobre a nossa empresa</b>, informe o canal pelo qual conheceu a MyCore, de acordo com o cadastro em <b>configurações{" > "}servidor{" > "}pesquisa</b>.</p>
                        <img src={CustomerDataHow} alt="Dados do Cliente - Como" className="view_images shadow"></img>
                    </div>





                </div>

            </div>

            <Footer />
        </div>

    )
}