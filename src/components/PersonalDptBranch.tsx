import { Link } from "react-router-dom";
import { useState } from "react";

import { CollaboratorsBranch } from "./CollaboratorsBranch";
import { CompaniesBranch } from "./CompaniesBranch";
import { PayrollBranch } from "./PayrollBranch";
import { VacationAndLeaveBranch } from "./VacationAndLeaveBranch";
import { PointSheetBranch } from "./PointSheetBranch";
import { SettingsDtpBranch } from "./SettingsDtpBranch";

export function PersonalDptBranch() {

    const [isCollaboratorsBranchOpen, setCollaboratorsBranchOpen] = useState(false)
    const [isCompaniesBranchOpen, setCompaniesBranchOpen] = useState(false)
    const [isPayrollBranchOpen, setPayrollBranchOpen] = useState(false)
    const [isVacationAndLeaveBranchOpen, setVacationAndLeaveBranchOpen] = useState(false)
    const [isPointSheetBranchOpen, setPointSheetBranchOpen] = useState(false)
    const [isSettingsDtpBranchOpen, setSettingsDtpBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="CollaboratorsBranch" onClick={() => { setCollaboratorsBranchOpen(!isCollaboratorsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="CollaboratorsBranch"></label>
                    <Link className="withDropdown" to="#">Colaboradores</Link>
                </div>
                {isCollaboratorsBranchOpen ?
                    <CollaboratorsBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="CompaniesBranch" onClick={() => { setCompaniesBranchOpen(!isCompaniesBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="CompaniesBranch"></label>
                    <Link className="withDropdown" to="#">Empresas</Link>
                </div>
                {isCompaniesBranchOpen ?
                    <CompaniesBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="PayrollBranch" onClick={() => { setPayrollBranchOpen(!isPayrollBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="PayrollBranch"></label>
                    <Link className="withDropdown" to="#">Folha de Pagamento</Link>
                </div>
                {isPayrollBranchOpen ?
                    <PayrollBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="VacationAndLeaveBranch" onClick={() => { setVacationAndLeaveBranchOpen(!isVacationAndLeaveBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="VacationAndLeaveBranch"></label>
                    <Link className="withDropdown" to="#">Férias e Afastamento</Link>
                </div>
                {isVacationAndLeaveBranchOpen ?
                    <VacationAndLeaveBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="PointSheetBranch" onClick={() => { setPointSheetBranchOpen(!isPointSheetBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="PointSheetBranch"></label>
                    <Link className="withDropdown" to="#">Folha de Ponto</Link>
                </div>
                {isPointSheetBranchOpen ?
                    <PointSheetBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="SettingsDtpBranch" onClick={() => { setSettingsDtpBranchOpen(!isSettingsDtpBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="SettingsDtpBranch"></label>
                    <Link className="withDropdown" to="#">Configurações</Link>
                </div>
                {isSettingsDtpBranchOpen ?
                    <SettingsDtpBranch />
                    : null}
            </li>
        </ul>
    )
}