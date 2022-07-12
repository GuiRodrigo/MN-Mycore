import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function HelpDeskCallCenterDashboard() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3>Módulo Help-Desk{" > "}Call Center{" > "}Dashbord de Serviços</h3>

                    <div>
                        <p>Nesta opção são visualizados todos os suportes em andamento.</p>
                        <img src="img/29 - helpd-call-cent-dsb-srv-sup-and.png" alt="Help Desk - Call Center - Suportes em Andamento" />
                    </div>
                    <div>
                        <p>Nesta opção são visualizados todos os suportes mensais.</p>
                        <img src="img/30 - helpd-call-cent-dsb-srv-sup-men.png" alt="Help Desk - Call Center - Suportes Mensais" />
                    </div>
                    <div>
                        <p>Nesta opção são visualizados todos os suportes em andamento com o técnico.</p>
                        <img src="img/31 - helpd-call-cent-dsb-srv-mat-tec.png" alt="Help Desk - Call Center - Materiais com Técnicos" />
                    </div>


                </div>
            </div >
            <Footer />
        </div >
    )
}