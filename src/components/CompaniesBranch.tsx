import { Link } from "react-router-dom";
import { useState } from "react";

import { ListCompaniesBranch } from "./ListCompaniesBranch";
import { AddCompaniesBranch } from "./AddCompaniesBranch";

export function CompaniesBranch() {

    const [isListCompaniesBranchOpen, setListCompaniesBranchOpen] = useState(false)
    const [isAddCompaniesBranchOpen, setAddCompaniesBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="ListCompaniesBranch" onClick={() => { setListCompaniesBranchOpen(!isListCompaniesBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ListCompaniesBranch"></label>
                    <Link className="withDropdown" to="#"> Listar Empresa </Link>
                </div>
                {isListCompaniesBranchOpen ?
                    <ListCompaniesBranch />
                    : null}
            </li>
            <li><input type="checkbox" name="" id="AddCompaniesBranch" onClick={() => { setAddCompaniesBranchOpen(!isAddCompaniesBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="AddCompaniesBranch"></label>
                    <Link className="withDropdown" to="#"> Adicionar Empresa </Link>
                </div>
                {isAddCompaniesBranchOpen ?
                    <AddCompaniesBranch />
                    : null}
            </li>
        </ul>
    )
}