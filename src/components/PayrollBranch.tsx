import { Link } from "react-router-dom";

export function PayrollBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Folha de Pagamento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Férias </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-pagamento/13o"> 13º </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-pagamento/adiantamento"> Adiantamento </Link> </li>
        </ul>
    )
}