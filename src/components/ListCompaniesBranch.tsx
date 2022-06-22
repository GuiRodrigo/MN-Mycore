import { Link } from "react-router-dom";

export function ListCompaniesBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/empressa/listar/ver-dados"> Ver Dados </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/empressa/listar/editar"> Editar </Link> </li>
        </ul>
    )
}