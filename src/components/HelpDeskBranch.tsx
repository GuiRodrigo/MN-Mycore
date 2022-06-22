import { Link } from 'react-router-dom'
import { useState } from 'react'

import { CallCenterBranch } from './CallCenterBranch'

export function HelpDeskBranch() {

    const [isCallCenterBranchOpen, setCallCenterBranchOpen] = useState(false)

    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Resumo </Link> </li>
            <li> <Link className="noDropdown" to="#"> Meus Suportes </Link> </li>
            <li> <Link className="noDropdown" to="#"> Suportes Fechados </Link> </li>
            <li> <Link className="noDropdown" to="#"> Painel </Link> </li>
            <li> <Link className="noDropdown" to="#"> Suportes do Sistema </Link> </li>
            <li> <Link className="noDropdown" to="#"> Monitoramento </Link> </li>
            <li> <input type="checkbox" name="" id="CallCenter" onClick={() => { setCallCenterBranchOpen(!isCallCenterBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="CallCenter"  ></label>
                    <Link className="withDropdown" to="#"> Call Center </Link>
                </div>

                {isCallCenterBranchOpen ?
                    <CallCenterBranch />
                    : null}
            </li>
            <li> <Link className="noDropdown" to="#"> Ordem de Serviço </Link> </li>
            <li> <Link className="noDropdown" to="#"> Supervisão/Campo </Link> </li>
        </ul>
    )
}