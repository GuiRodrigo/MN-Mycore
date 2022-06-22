import { Link } from "react-router-dom";

export function VacationAndLeaveBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/ferias-afastamento/afastamento"> Férias </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/ferias-afastamento/ferias"> Afastamento </Link> </li>
        </ul>
    )
}