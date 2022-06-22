import { Link } from "react-router-dom";
import { useState } from "react";

import { AccessPointBranch } from './AccessPointBranch'

export function MonitoringBranch() {

    const [isAccessPointBranchOpen, setAccessPointBranchOpen] = useState(false)

    return (
        <ul>
            <li>
                <input type="checkbox" name="" id="AccessPointBranch" onClick={() => { setAccessPointBranchOpen(!isAccessPointBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="AccessPointBranch"></label>
                    <Link className="withDropdown" to="#"> Pontos de Acesso </Link>
                </div>

                {isAccessPointBranchOpen ?
                    <AccessPointBranch />
                    : null}
            </li>


            <li> <Link className="noDropdown" to="#"> Interfaces de Rede </Link> </li>


            <li> <Link className="noDropdown" to="#"> IP Conntrack </Link> </li>


            <li> <Link className="noDropdown" to="#"> Load Average e Memória </Link> </li>


            <li> <Link className="noDropdown" to="#"> Hard Disk </Link> </li>


            <li> <Link className="noDropdown" to="#"> Armazenamento </Link> </li>


        </ul>
    )
}