import { Link } from "react-router-dom";

export function CallCenterBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Abrir Suporte </Link> </li>
            <li> <Link className="noDropdown" to="#"> Dados do Cliente </Link> </li>
            <li> <Link className="noDropdown" to="#"> Editar Cliente </Link> </li>
            <li> <Link className="noDropdown" to="#"> Visualizar Anexos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Logins </Link> </li>
            <li> <Link className="noDropdown" to="#"> Contrato </Link> </li>
            <li> <Link className="noDropdown" to="#"> Materiais Aplicados </Link> </li>
            <li> <Link className="noDropdown" to="#"> Dashboard </Link> </li>
            <li> <Link className="noDropdown" to="#"> Novo Cliente </Link> </li>
            <li> <Link className="noDropdown" to="#"> Histórico Financeiro - Todos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Histórico de Suporte - Todos </Link> </li>
        </ul>
    )
}