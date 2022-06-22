import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import NewClient from "./img/NewClient.png"

export function AddClient() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >
                    <hgroup>
                        <h3> Módulo Clientes {">"} Novo Cliente</h3>
                        <div>
                            <p> Ao clicar no botão <b>Novo Cliente</b> aparecerão as telas com as abas <b>Dados do Cliente</b>, <b>Endereço</b>,
                                <b>Contato</b> e <b>Automação</b> que deverão ser preenchidas para que o novo cliente seja adicionado ao cadastro.
                            </p>
                            <img src={NewClient} alt="Novo Cliente"></img>
                        </div>
                    </hgroup>

                </div>
            </div>
            <Footer />
        </div>
    )
}