import { Link } from "react-router-dom";

export function AccessPointBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/monitoramento/ponto-acesso/resumo"> Resumo </Link> </li>
        </ul>
    )
}