import { useState } from "react";
import { Link } from "react-router-dom";

import { NewUserBranch } from "./NewUserBranch";

export function AccessProfileBranch() {

    const [isNewUserBranchOpen, setNewUserBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="NewUserBranch" onClick={() => { setNewUserBranchOpen(!isNewUserBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="NewUserBranch"></label>
                    <Link className="withDropdown" to="#">Novo Usuário</Link>
                </div>

                {isNewUserBranchOpen ?
                    <NewUserBranch />
                    : null}
            </li>
        </ul>
    )
}