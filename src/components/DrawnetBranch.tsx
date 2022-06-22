import { Link } from 'react-router-dom'
import { useState } from 'react'

import { DrawNetworkBranch } from './DrawNetworkBranch'

export function DrawnetBranch() {

    const [isDrawNetworkBranchOpen, setDrawNetworkBranchOpen] = useState(false)

    return (
        <ul>
            <li> <Link className="noDropdown" to="/drawnet/visualizar-rede"> Visualizar Rede </Link> </li>
            <li>
                <input type="checkbox" name="" id="DrawNetworkBranch" onClick={() => { setDrawNetworkBranchOpen(!isDrawNetworkBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="DrawNetworkBranch" />
                    <Link className="withDropdown" to="#"> Desenhar Rede </Link>
                </div>
                {isDrawNetworkBranchOpen ?
                    <DrawNetworkBranch />
                    : null}
            </li>
        </ul>
    )
}