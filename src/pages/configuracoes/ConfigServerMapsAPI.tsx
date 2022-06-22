import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import ConfigurationServerGoogleAPI1 from "./img/ConfigurationServerGoogleAPI1.png"
import ConfigurationServerGoogleAPI2 from "./img/ConfigurationServerGoogleAPI2.png"
import ConfigurationServerGoogleAPI3 from "./img/ConfigurationServerGoogleAPI3.png"
import ConfigurationServerGoogleAPI4 from "./img/ConfigurationServerGoogleAPI4.png"
import ConfigurationServerGoogleAPI5 from "./img/ConfigurationServerGoogleAPI5.png"
import ConfigurationServerGoogleAPI6 from "./img/ConfigurationServerGoogleAPI6.png"
import ConfigurationServerGoogleAPI7 from "./img/ConfigurationServerGoogleAPI7.png"
import ConfigurationServerGoogleAPI8 from "./img/ConfigurationServerGoogleAPI8.png"
import ConfigurationServerGoogleAPI9 from "./img/ConfigurationServerGoogleAPI9.png"

export function ConfigServerMapsAPI() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <h3> Módulo Configurações - Tela Principal</h3>
                    <p>O módulo de configurações foi desenvolvido para prover o gerenciamento dos ajustes do ambiente do MyCore de forma a adequar o funcionamento do sistema de acordo com as especificidades de cada módulo.</p>

                    <div>
                        <p>Na tela, abaixo, visualiza-se a configuração da API (Application Program Interface) do Gloogle Maps, obtendo uma chave para o seu funcionamento.</p>
                        <img src={ConfigurationServerGoogleAPI1} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 01</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se clicar no botão <b>GET STARTED</b>.</p>
                        <img src={ConfigurationServerGoogleAPI2} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <div>
                            <p>Na tela, abaixo, visualiza-se o <b>passo 02</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore , onde deve-se marcar <b>MAPS</b>, <b>ROUTES</b>, <b>PLACES</b> e clicar no botão <b>CONTINUAR</b>.</p>
                            <img src={ConfigurationServerGoogleAPI3} alt="Configuração Servidor - Google API" />
                        </div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 03</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se selecionar em <b>API PROJECT</b> no menu dropdown e clicar n botão <b>NEXT</b>.</p>
                        <img src={ConfigurationServerGoogleAPI4} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 04</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se clicar em <b>CRIAR CONTA DE FATURAMENTO</b>.</p>
                        <img src={ConfigurationServerGoogleAPI5} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 05</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se marcar <b>Li e concordo ...</b> e clicar em <b>CONCORDAR E CONTINUAR</b>.</p>
                        <img src={ConfigurationServerGoogleAPI6} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 06</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se selecionar <b>PESSOA JURÍDICA</b> no menu dropdown e informar o <b>CNPJ</b> da empresa.</p>
                        <img src={ConfigurationServerGoogleAPI7} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se o <b>passo 07</b> da chamada da URL da Google para obtenção da chave da API para configuração no MyCore, onde deve-se marcar <b>CONFIRMAR</b> as informações do responsável pela conta e informar os dados do <b>CARTÃO DE CRÉDITO</b> no qual será debitado o valor referente à obtenção da chave da API.</p>
                        <img src={ConfigurationServerGoogleAPI8} alt="Configuração Servidor - Google API" />
                    </div>
                    <div>
                        <p>Na tela, abaixo, visualiza-se a validação da Google API, após a obtenção da chave para o seu funcionamento.</p>
                        <img src={ConfigurationServerGoogleAPI9} alt="Configuração Servidor - Validação da Google API" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}