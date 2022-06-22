import { useState, } from 'react'
import { Link } from 'react-router-dom'

import { LoginBranch } from './LoginBranch'
import { ViewBranch } from './ViewBranch'
import { InvoicesBranch } from './InvoicesBranch'
import { CalledBranch } from './CalledBranch'
import { AppliedMaterialsBranch } from './AppliedMaterialsBranch'
import { ContractsBranch } from './ClientContractsBranch'
import { EditBranch } from './EditBranch'






export function MouseMenuBranch() {

    const [isLoginBranchOpen, setLoginBranchOpen] = useState(false)
    const [isViewBranchOpen, setViewBranchOpen] = useState(false)
    const [isInvoicesBranchOpen, setInvoicesBranchOpen] = useState(false)
    const [isCalledBranchOpen, setCalledBranchOpen] = useState(false)
    const [isAppliedMaterialsBranchOpen, setAppliedMaterialsBranchOpen] = useState(false)
    const [isContractsBranchOpen, setContractsBranchOpen] = useState(false)
    const [isEditBranchOpen, setEditBranchOpen] = useState(false)

    return (
        <ul>
            <li>
                <input type="checkbox" id="LoginBranch" onClick={() => { setLoginBranchOpen(!isLoginBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="LoginBranch"></label>
                    <Link className="withDropdown" to="/cliente/menu-mouse/login">Logins</Link>
                </div>
                {isLoginBranchOpen ?
                    <LoginBranch />
                    : null}

            </li>
            <li>
                <input type="checkbox" id="ViewBranch" onClick={() => { setViewBranchOpen(!isViewBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="ViewBranch"></label>
                    <Link className="withDropdown" to="#">Viusualizar</Link>
                </div>
                {isViewBranchOpen ?
                    <ViewBranch />
                    : null}

            </li>
            <li>

                <Link className="noDropdown" to="/cliente/menu-mouse/goeolocalizacao">Editar Geolocalização</Link>
            </li>
            <li>
                <input type="checkbox" id="InvoicesBranch" onClick={() => { setInvoicesBranchOpen(!isInvoicesBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="InvoicesBranch"></label>
                    <Link className="withDropdown" to="#">Faturas</Link>
                </div>
                {isInvoicesBranchOpen ?
                    <InvoicesBranch />
                    : null}
            </li>
            <li>

                <Link className="noDropdown" to="/cliente/menu-mouse/NF21">Nota Fiscal 21</Link>
            </li>
            <li>
                <input type="checkbox" id="CalledBranch" onClick={() => { setCalledBranchOpen(!isCalledBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="CalledBranch"></label>
                    <Link className="withDropdown" to="#">Chamados</Link>
                </div>
                {isCalledBranchOpen ?
                    <CalledBranch />
                    : null}
            </li>
            <li>
                <input type="checkbox" id="AppliedMaterialsBranch" onClick={() => { setAppliedMaterialsBranchOpen(!isAppliedMaterialsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="AppliedMaterialsBranch"></label>
                    <Link className="withDropdown" to="#">Materiais Aplicados</Link>
                </div>
                {isAppliedMaterialsBranchOpen ?
                    <AppliedMaterialsBranch />
                    : null}
            </li>
            <li>
                <input type="checkbox" id="ContractsBranch" onClick={() => { setContractsBranchOpen(!isContractsBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="ContractsBranch"></label>
                    <Link className="withDropdown" to="#">Contratos</Link>
                </div>
                {isContractsBranchOpen ?
                    <ContractsBranch />
                    : null}
            </li>
            <li>
                <input type="checkbox" id="EditBranch" onClick={() => { setEditBranchOpen(!isEditBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="EditBranch"></label>
                    <Link className="withDropdown" to="">Editar</Link>
                </div>
                {isEditBranchOpen ?
                    <EditBranch />
                    : null}
            </li>
        </ul>
    )
}