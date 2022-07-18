import { Link } from "react-router-dom";

export function PPoEIPoEServerBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/ppoe/interfaces"> Interfaces </Link> </li>
            <li> <Link className="noDropdown" to="/network/ppoe/servicos"> Serviços </Link> </li>
            <li> <Link className="noDropdown" to="/network/ppoe/sessoes-ativas"> Sessões Ativas </Link> </li>
        </ul>
    )
}