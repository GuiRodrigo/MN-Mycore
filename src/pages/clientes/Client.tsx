import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import '../../styles/Client.scss'

import AddClient from "./img/AddClient.png"

export function Client() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <hgroup>
                        <h3> Módulo Clientes {">"} Tela Principal</h3>
                        <div>
                            <p>O módulo de clientes foi desenvolvido para prover o gerenciamento das informações dos clientes no MyCore, de acordo com uma metodologia que abrange todos os seus atributos, dotando os usuários da potencialidade de uso de todas as propriedades dos clientes apenas dentro desse módulo.</p>
                        </div>
                    </hgroup>

                    <div>
                        <p> Esta é a tela principal de clientes, onde as suas informações pertinentes são exibidas. Observando a tela é possivel ver que há várias operações que podem ser executadas, tais como:</p>

                        <ul >
                            <li>Adicionar um novo cliente;</li>
                            <li>Selecionar a empresa de onde se quer exibir os clientes;</li>
                            <li>Selecionar o status atribuido aos clientes para visualizá-los;</li>
                            <li>Pesquisar a lista de clientes; </li>
                            <li>Exportar a lista de clientes para o Excel; </li>
                            <li>Visualizar os clientes pela modalidade de grupo de acesso; </li>
                            <li>Visualizar os clientes pelas iniciais do nome; </li>
                            <li>Visualizar todos os clientes existentes do cadastro; </li>
                            <li>Visualizar os clientes cujos nomes tenham numerais como iniciais; </li>
                        </ul>
                        <img src={AddClient} alt="Adicionar Clientes" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}