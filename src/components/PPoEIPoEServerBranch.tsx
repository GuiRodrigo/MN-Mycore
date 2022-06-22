import { Link } from "react-router-dom";

export function PPoEIPoEServerBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Interfaces </Link> </li>
            <li> <Link className="noDropdown" to="#"> Serviços </Link> </li>
            <li> <Link className="noDropdown" to="#"> Sessões Ativas </Link> </li>
        </ul>
    )
}