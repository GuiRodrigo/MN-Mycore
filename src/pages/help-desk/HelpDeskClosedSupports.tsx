import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskClosedSupports() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Suportes Fechados</h3>

                    <div>
                        <p>Nesta tela são visualizados os itens de suporte que foram fechados, com protocolo e com atendimento concluído.</p>
                        <img src="img/03 - helpd-sup-fech.png" alt="Help Desk - Meus Suportes" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}