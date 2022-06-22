import { Link } from "react-router-dom";
import { useState } from "react";

import { OSPFBranch } from './OSPFBranch'

export function RoutingBranch() {

    const [isOSPFBranchOpen, setOSPFBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="OSPFBranch" onClick={() => { setOSPFBranchOpen(!isOSPFBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="OSPFBranch"></label>
                    <Link className="withDropdown" to="#"> OSPF </Link>
                </div>
                {isOSPFBranchOpen ?
                    <OSPFBranch />
                    : null}
            </li>
        </ul>
    )
}