import { Link } from "react-router-dom";

export function BillsToPayBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/contas-pagar/contas-pagar"> Contas a Pagar </Link>  </li>
            <li> <Link className="noDropdown" to="/financeiro/contas-pagar/fornecedor"> Fornecedor </Link>  </li>
        </ul>
    )
}