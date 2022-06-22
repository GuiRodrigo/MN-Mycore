import { Link } from "react-router-dom";
import { useState } from "react";

import { BankInvoicesBranch } from "./BankInvoicesBranch";
import { RemittancesBranch } from "./RemittancesBranch";

export function BanksBranch() {

    const [isBankInvoicesBranchOpen, setBankInvoicesBranchOpen] = useState(false)
    const [isRemittancesBranchOpen, setRemittancesBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="BankInvoicesBranch" />

                <div className="withLabel" >
                    <label htmlFor="BankInvoicesBranch" onClick={() => { setBankInvoicesBranchOpen(!isBankInvoicesBranchOpen) }}  ></label>
                    <Link className="withDropdown" to="#"> Faturas </Link>
                </div>

                {isBankInvoicesBranchOpen ?
                    <BankInvoicesBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="RemittancesBranch" />

                <div className="withLabel" >
                    <label htmlFor="RemittancesBranch" onClick={() => { setRemittancesBranchOpen(!isRemittancesBranchOpen) }}  ></label>
                    <Link className="withDropdown" to="#"> Remesas </Link>
                </div>

                {isRemittancesBranchOpen ?
                    <RemittancesBranch />
                    : null}
            </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/retornar"> Retorno </Link> </li>
        </ul>
    )
}