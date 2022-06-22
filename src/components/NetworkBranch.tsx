import { Link } from "react-router-dom";
import { useState } from "react";

import { NetworkServerBranch } from './NetworkServerBranch'
import { RadiusServerBranch } from './RadiusServerBranch'
import { MonitoringBranch } from './MonitoringBranch'
import { NetworkDocumentationBranch } from './NetworkDocumentationBranch'
import { OLTBranch } from './OLTBranch'
import { RoutingBranch } from './RoutingBranch'
import { PPoEIPoEServerBranch } from './PPoEIPoEServerBranch'

export function NetworkBranch() {

    const [isNetworkServerBranchOpen, setNetworkServerBranchOpen] = useState(false)
    const [isRadiusServerBranchOpen, setRadiusServerBranchOpen] = useState(false)
    const [isMonitoringBranchOpen, setMonitoringBranchOpen] = useState(false)
    const [isNetworkDocumentationBranchOpen, setNetworkDocumentationBranchOpen] = useState(false)
    const [isOLTBranchOpen, setOLTBranchOpen] = useState(false)
    const [isRoutingBranchOpen, setRoutingBranchOpen] = useState(false)
    const [isPPoEIPoEServerBranchOpen, setPPoEIPoEServerBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="NetworkServerBranch" onClick={() => { setNetworkServerBranchOpen(!isNetworkServerBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="NetworkServerBranch"></label>
                    <Link className="withDropdown" to="#"> Servidor </Link>
                </div>

                {isNetworkServerBranchOpen ?
                    <NetworkServerBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="RadiusServerBranch" onClick={() => { setRadiusServerBranchOpen(!isRadiusServerBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="RadiusServerBranch"></label>
                    <Link className="withDropdown" to="#"> Radius Server </Link>
                </div>

                {isRadiusServerBranchOpen ?
                    <RadiusServerBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="MonitoringBranch" onClick={() => { setMonitoringBranchOpen(!isMonitoringBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="MonitoringBranch"></label>
                    <Link className="withDropdown" to="#"> Monitoramento </Link>
                </div>

                {isMonitoringBranchOpen ?
                    <MonitoringBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="NetworkDocumentationBranch" onClick={() => { setNetworkDocumentationBranchOpen(!isNetworkDocumentationBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="NetworkDocumentationBranch"></label>
                    <Link className="withDropdown" to="#"> Documentação de Rede </Link>
                </div>

                {isNetworkDocumentationBranchOpen ?
                    <NetworkDocumentationBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="OLTBranch" onClick={() => { setOLTBranchOpen(!isOLTBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="OLTBranch"></label>
                    <Link className="withDropdown" to="#"> OLT </Link>
                </div>

                {isOLTBranchOpen ?
                    <OLTBranch />
                    : null}
            </li>


            <li> <Link className="noDropdown" to="#"> IP </Link></li>


            <li> <Link className="noDropdown" to="#"> DNS Server </Link></li>


            <li> <Link className="noDropdown" to="#"> DHCP Server </Link></li>


            <li> <input type="checkbox" name="" id="RoutingBranch" onClick={() => { setRoutingBranchOpen(!isRoutingBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="RoutingBranch"></label>
                    <Link className="withDropdown" to="#"> Roteamento </Link>
                </div>

                {isRoutingBranchOpen ?
                    <RoutingBranch />
                    : null}
            </li>


            <li> <input type="checkbox" name="" id="PPoEIPoEServerBranch" onClick={() => { setPPoEIPoEServerBranchOpen(!isPPoEIPoEServerBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="PPoEIPoEServerBranch"></label>
                    <Link className="withDropdown" to="#"> PPoE/IPoE Server </Link>
                </div>

                {isPPoEIPoEServerBranchOpen ?
                    <PPoEIPoEServerBranch />
                    : null}
            </li>


        </ul>
    )
}