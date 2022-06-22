import { Link } from "react-router-dom";

export function NetworkReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Navegação Bloqueada </Link> </li>
            <li> <Link className="noDropdown" to="#"> Cliente por Grupo </Link> </li>
            <li> <Link className="noDropdown" to="#"> Histórico Conexão </Link> </li>
            <li> <Link className="noDropdown" to="#">Clientes Ativos  </Link> </li>
            <li> <Link className="noDropdown" to="#"> Login Bloqueado X IP </Link> </li>
            <li> <Link className="noDropdown" to="#"> Logins com IP Reservado </Link> </li>
            <li> <Link className="noDropdown" to="#"> Quantidade de Logins por Cliente </Link> </li>
            <li> <Link className="noDropdown" to="#"> Listagem de CTO </Link> </li>
            <li> <Link className="noDropdown" to="#"> Lista Acessos Adicionais </Link> </li>
        </ul>
    )
}