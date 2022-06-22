import { Link } from "react-router-dom";

export function CalledBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#">Chamados Abertos</Link> </li>
            <li> <Link className="noDropdown" to="#">Chamados Fechados</Link> </li>
            <li> <Link className="noDropdown" to="#">Todos os Chamados</Link> </li>
        </ul>
    )
}