import { Link } from "react-router-dom";

export function CallCenterBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/help-desk/call-center/abrir-suporte"> Abrir Suporte </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/dados-cliente"> Dados do Cliente </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/editar-cliente"> Editar Cliente </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/visualizar"> Visualizar Anexos </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/logins"> Logins </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/contratos"> Contrato </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/materiais-aplicados"> Materiais Aplicados </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/dashboard"> Dashboard </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/novo-cliente"> Novo Cliente </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/historico-financeiro-todos"> Histórico Financeiro - Todos </Link> </li>
            <li> <Link className="noDropdown" to="/help-desk/call-center/historico-suporte-todos"> Histórico de Suporte - Todos </Link> </li>
        </ul>
    )
}