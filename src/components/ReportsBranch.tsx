import { Link } from "react-router-dom";
import { useState } from "react";

import { ClientReportsBranch } from './ClientReportsBranch'
import { FinancialReportsBranch } from "./FinancialReportsBranch";
import { ReportsHelpDeskBranch } from "./ReportsHelpDeskBranch";
import { IventoryReportsBranch } from "./IventoryReportsBranch";
import { ContractReportsBranch } from "./ContractReportsBranch";
import { SupportReportsBranch } from "./SupportReportsBranch";
import { NetworkReportsBranch } from "./NetworkReportsBranch";

export function ReportsBranch() {

    const [isClientReportsBranchOpen, setClientReportsBranchOpen] = useState(false)
    const [isFinancialReportsBranchOpen, setFinancialReportsBranchOpen] = useState(false)
    const [isReportsHelpDeskBranchOpen, setReportsHelpDeskBranchOpen] = useState(false)
    const [isIventoryReportsBranchOpen, setIventoryReportsBranchOpen] = useState(false)
    const [isContractReportsBranchOpen, setContractReportsBranchOpen] = useState(false)
    const [isSupportReportsBranchOpen, setSupportReportsBranchOpen] = useState(false)
    const [isNetworkReportsBranchOpen, setNetworkReportsBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="ClientReportsBranch" onClick={() => { setClientReportsBranchOpen(!isClientReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="ClientReportsBranch"></label>
                    <Link className="withDropdown" to="#"> Clientes </Link>
                </div>

                {isClientReportsBranchOpen ?
                    <ClientReportsBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="ReportsHelpDeskBranch" onClick={() => { setFinancialReportsBranchOpen(!isFinancialReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="ReportsHelpDeskBranch"></label>
                    <Link className="withDropdown" to="#"> Financeiro </Link>
                </div>

                {isFinancialReportsBranchOpen ?
                    <FinancialReportsBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="FinancialReportsBranch" onClick={() => { setReportsHelpDeskBranchOpen(!isReportsHelpDeskBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="FinancialReportsBranch"></label>
                    <Link className="withDropdown" to="#">  Help Desk</Link>
                </div>

                {isReportsHelpDeskBranchOpen ?
                    <ReportsHelpDeskBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="IventoryReportsBranch" onClick={() => { setIventoryReportsBranchOpen(!isIventoryReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="IventoryReportsBranch"></label>
                    <Link className="withDropdown" to="#"> Estoque </Link>
                </div>

                {isIventoryReportsBranchOpen ?
                    <IventoryReportsBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="ContractReportsBranch" onClick={() => { setContractReportsBranchOpen(!isContractReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="ContractReportsBranch"></label>
                    <Link className="withDropdown" to="#"> Contratos </Link>
                </div>

                {isContractReportsBranchOpen ?
                    <ContractReportsBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="SupportReportsBranch" onClick={() => { setSupportReportsBranchOpen(!isSupportReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="SupportReportsBranch"></label>
                    <Link className="withDropdown" to="#"> Suporte </Link>
                </div>

                {isSupportReportsBranchOpen ?
                    <SupportReportsBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="NetworkReportsBranch" onClick={() => { setNetworkReportsBranchOpen(!isNetworkReportsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="NetworkReportsBranch"></label>
                    <Link className="withDropdown" to="#"> Network </Link>
                </div>

                {isNetworkReportsBranchOpen ?
                    <NetworkReportsBranch />
                    : null}
            </li>



        </ul>
    )
}