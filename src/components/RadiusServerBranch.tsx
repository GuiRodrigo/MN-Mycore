import { Link } from "react-router-dom";

export function RadiusServerBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Concentradores </Link> </li>
            <li> <Link className="noDropdown" to="#"> Sessões Ativas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Sessões Terminadas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Logins </Link> </li>
            <li> <Link className="noDropdown" to="#"> Histórico de Logins </Link> </li>
            <li> <Link className="noDropdown" to="#"> Depurar </Link> </li>
        </ul>
    )
}