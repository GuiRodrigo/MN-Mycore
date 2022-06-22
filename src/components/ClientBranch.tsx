import { Link } from 'react-router-dom'
import { useState } from 'react'

import { AddClienteBranch } from './AddClientBranch'
import { MouseMenuBranch } from './MouseMenuBranch'

export function ClientBranch() {

    const [isAddClientBranchOpen, setAddClientBranchOpen] = useState(false)
    const [isMouseMenuBranchOpen, setMouseMenuBranchOpen] = useState(false)

    return (
        <ul>
            <li>

                <input type="checkbox" id="AddClienteBranch" />

                <div className="withLabel"  >
                    <label htmlFor="AddClienteBranch" onClick={() => { setAddClientBranchOpen(!isAddClientBranchOpen) }} ></label>
                    <Link className="withDropdown" to="/cliente/adicionar">Adicionar Cliente</Link>
                </div>

                {isAddClientBranchOpen ?
                    <AddClienteBranch />
                    : null}

            </li>
            <li>

                <input type="checkbox" id="MouseMenuBranch" />

                <div className="withLabel"  >
                    <label htmlFor="MouseMenuBranch" onClick={() => { setMouseMenuBranchOpen(!isMouseMenuBranchOpen) }} ></label>
                    <Link className="withDropdown" to="/cliente/menu-mouse">Menu do Mouse</Link>
                </div>

                {isMouseMenuBranchOpen ?
                    <MouseMenuBranch />
                    : null}

            </li>
        </ul>
    )
}