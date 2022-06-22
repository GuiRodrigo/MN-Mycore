import { Link } from "react-router-dom";

export function ContractsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#">Todos</Link></li>
            <li> <Link className="noDropdown" to="#">Aceito</Link></li>
            <li> <Link className="noDropdown" to="#">Discordou</Link></li>
        </ul>
    )
}