import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import CustomersMenuRightMouseInvoicesMenuChangeDownloadManual from "./img/CustomersMenuRightMouseInvoicesMenuChangeDownloadManual.png"

export function ClientMouseMenuInvoicesMenuChangeManualDownload() {
    return (
        <div id="container">
            <div id="pageContent" >
                <Menu />
                <div id="textContent" >

                    <h3> Módulo Clientes{" > "}Menu Mouse{" > "}Faturas{" > "}Menu{" > "}Mudar para Baixa Manual</h3>

                    <div>
                        <p>Na tela, abaixo, é apresentada o opção de mudar a fatura para baixa manual. Esta opção é realizada para faturas que estão com <b>promessa de pagamento</b>.</p>
                        <img src={CustomersMenuRightMouseInvoicesMenuChangeDownloadManual} alt="Clientes - Menu lado direito do mouse - Faturas - Menu - Mudar para Baixa Manual" />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}