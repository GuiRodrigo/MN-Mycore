import { Link } from "react-router-dom";

export function ReportsHelpDeskBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Resumo </Link> </li>
            <li> <Link className="noDropdown" to="#"> Chamados Abertos </Link> </li>
            <li> <Link className="noDropdown" to="#"> ChamadosFechados </Link> </li>
            <li> <Link className="noDropdown" to="#"> Chamados Sistema </Link> </li>
            <li> <Link className="noDropdown" to="#"> Motivo de Fechamento </Link> </li>
        </ul>
    )
}