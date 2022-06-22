import { Link } from "react-router-dom";

export function CompaniesAccountsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/empressas-contas/empressa">Empresa</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/empressas-contas/dados-bancarios">Dados Bancários</Link> </li>
        </ul>
    )
}