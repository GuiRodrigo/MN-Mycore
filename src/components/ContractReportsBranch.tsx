import { Link } from 'react-router-dom'

export function ContractReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Contratos do Clientes </Link> </li>
            <li> <Link className="noDropdown" to="#"> Aniversário de Contratos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Reajustar Mensalidade </Link> </li>
        </ul>
    )
}