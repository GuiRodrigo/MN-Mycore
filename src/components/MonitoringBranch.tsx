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


            <li> <Link className="noDropdown" to="/network/monitoramento/interface-rede"> Interfaces de Rede </Link> </li>


            <li> <Link className="noDropdown" to="/network/monitoramento/ip-conntrack"> IP Conntrack </Link> </li>


            <li> <Link className="noDropdown" to="/network/monitoramento/load-average-memoria"> Load Average e Memória </Link> </li>


            <li> <Link className="noDropdown" to="/network/monitoramento/hard-disk"> Hard Disk </Link> </li>


            <li> <Link className="noDropdown" to="/network/monitoramento/armazenamento"> Armazenamento </Link> </li>


        </ul>
    )
}