import { Link } from "react-router-dom";
import { useState } from "react";

import { ListCollaboratorsBranch } from "./ListCollaboratorsBranch";
import { AddCollaboratorsBranch } from "./AddCollaboratorsBranch";

export function CollaboratorsBranch() {

    const [isListCollaborBranchOpen, setListCollaborBranchOpen] = useState(false)
    const [isAddCollaboratorsBranchOpen, setAddCollaboratorsBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="ListCollaboratorsBranch" onClick={() => { setListCollaborBranchOpen(!isListCollaborBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ListCollaboratorsBranch"></label>
                    <Link className="withDropdown" to="/dpt-pessoal/colaboradores/listar">Listar Colaboradores</Link>
                </div>
                {isListCollaborBranchOpen ?
                    <ListCollaboratorsBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="AddCollaboratorsBranch" onClick={() => { setAddCollaboratorsBranchOpen(!isAddCollaboratorsBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="AddCollaboratorsBranch"></label>
                    <Link className="withDropdown" to="#">Adicionar Colaboradores</Link>
                </div>
                {isAddCollaboratorsBranchOpen ?
                    <AddCollaboratorsBranch />
                    : null}
            </li>
        </ul>
    )
}