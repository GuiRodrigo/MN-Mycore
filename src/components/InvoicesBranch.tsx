import { Link } from "react-router-dom";
import { useState } from "react";

import { InvoicesViewButtonsBranch } from "./InvoicesViewButtonsBranch"
import { InvoicesMouseMenuBranch } from "./InvoicesMouseMenuBranch"

export function InvoicesBranch() {

    const [isInvoicesViewButtonsBranchOpen, setInvoicesViewButtonsBranchOpen] = useState(false)
    const [isInvoicesMouseMenuBranchOpen, setInvoicesMouseMenuBranchOpen] = useState(false)

    return (
        <ul>
            <li>
                <input type="checkbox" id="InvoicesViewButtonsBranch" onClick={() => { setInvoicesViewButtonsBranchOpen(!isInvoicesViewButtonsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="InvoicesViewButtonsBranch"></label>
                    <Link className="withDropdown" to="#"> Faturas - Botões de Visualização</Link>
                </div>

                {isInvoicesViewButtonsBranchOpen ?
                    <InvoicesViewButtonsBranch />
                    : null}
            </li>
            <li>
                <input type="checkbox" id="InvoicesMouseMenuBranch" onClick={() => { setInvoicesMouseMenuBranchOpen(!isInvoicesMouseMenuBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="InvoicesMouseMenuBranch"></label>
                    <Link className="withDropdown" to="/cliente/menu-mouse/faturas-menu"> Faturas - Menu do Mouse</Link>
                </div>

                {isInvoicesMouseMenuBranchOpen ?
                    <InvoicesMouseMenuBranch />
                    : null}
            </li>
        </ul>
    )
}