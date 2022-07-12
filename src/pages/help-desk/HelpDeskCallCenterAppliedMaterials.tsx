import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterAppliedMaterials() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Call Center{" > "}Materiais Aplicados</h3>

                    <div>
                        <p>Nesta tela são visualizados <b>todos</b> os materiais aplicados em campo, de posse do técnico.</p>
                        <img src="img/27 - helpd-call-cent-mat-apl-tod.png" alt="Help Desk - Call Center - Materiais Aplicados - Todos" />
                    </div>
                    <div>
                        <p>Nesta tela são visualizados os materiais aplicados em campo pelo técnico, que estão em <b>aberto</b>.</p>
                        <img src="img/28 - helpd-call-cent-mat-apl-abr.png" alt="Help Desk - Call Center - Materiais Aplicados - Abertos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}