import { Link } from "react-router-dom";

export function RadiusServerBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/radius-server/concentradores"> Concentradores </Link> </li>
            <li> <Link className="noDropdown" to="/network/radius-server/sessoes-ativas"> Sessões Ativas </Link> </li>
            <li> <Link className="noDropdown" to="/network/radius-server/sessoes-terminadas"> Sessões Terminadas </Link> </li>
            <li> <Link className="noDropdown" to="/network/radius-server/logins"> Logins </Link> </li>
            <li> <Link className="noDropdown" to="/network/radius-server/historico-logins"> Histórico de Logins </Link> </li>
            <li> <Link className="noDropdown" to="/network/radius-server/depurar"> Depurar </Link> </li>
        </ul>
    )
}