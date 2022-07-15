import { Link } from 'react-router-dom'
import { useState } from 'react'

import { CallCenterBranch } from './CallCenterBranch'

export function HelpDeskBranch() {

    const [isCallCenterBranchOpen, setCallCenterBranchOpen] = useState(false)

    return (
        <ul>
            <li> <Link className="noDropdown" to="/help-desk/resumo"> Resumo </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/meus-suportes"> Meus Suportes </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/suportes-fechados"> Suportes Fechados </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/painel"> Painel </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/suportes-sistema"> Suportes do Sistema </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/monitoramento"> Monitoramento </Link> </li>
            <li> <input type="checkbox" name="" id="CallCenter" onClick={() => { setCallCenterBranchOpen(!isCallCenterBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="CallCenter"  ></label>
                    <Link className="withDropdown" to="/help-desk/call-center"> Call Center </Link>
                </div>

                {isCallCenterBranchOpen ?
                    <CallCenterBranch />
                    : null}
            </li>
            <li> <Link className="noDropdown" to="/help-desk/ordem-servico"> Ordem de Serviço </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/supervisao-campo"> Supervisão/Campo </Link> </li>
        </ul>
    )
}