import { Link } from "react-router-dom";

export function ServiceOrderBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#">OS Existente</Link> </li>
            <li> <Link className="noDropdown" to="#">Nova OS</Link> </li>
            <li> <Link className="noDropdown" to="#">OS - Opções</Link> </li>
        </ul>
    )
}