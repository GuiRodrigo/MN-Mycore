import { Link } from "react-router-dom";

export function AddCompaniesBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/empressa/adicionar/empressa"> Empressa </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/empressa/adicionar/endereco"> Endereço </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/empressa/adicionar/responsavel"> Responsável </Link> </li>
        </ul>

    )
}