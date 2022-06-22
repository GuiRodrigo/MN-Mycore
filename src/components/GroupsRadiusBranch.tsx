import { Link } from "react-router-dom";
import { useState } from "react";

import { GroupParametersBranch } from "./GroupParametersBranch";

export function GroupsRadiusBranch() {
    const [isGroupParametersBranchOpen, setGroupParametersBranchOpen] = useState(false)

    return (
        <ul>
            <li>
                <input type="checkbox" name="" id="GroupParametersBranch" onClick={() => { setGroupParametersBranchOpen(!isGroupParametersBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="GroupParametersBranch"></label>
                    <Link className="withDropdown" to="/configuracoes/grupos-radius/parametros"> Pârametros do Grupo</Link>
                </div>
                {isGroupParametersBranchOpen ?
                    <GroupParametersBranch />
                    : null}
            </li>
            <li> <Link className="noDropdown" to="#">  Novo Grupo </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/configuracoes">  Configurações </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/link-full">  Link Full </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/dominio-radius">  Domínio Radius </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/pool-radius">  Pool Radius </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/b-rass">  B-RAS </Link></li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/mikrotik">  Mikrotik Export </Link></li>
        </ul>
    )
}