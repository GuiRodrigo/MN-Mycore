import { Link } from "react-router-dom";

export function ClientReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Bairro </Link> </li>
            <li> <Link className="noDropdown" to="#"> Cidade </Link> </li>
            <li> <Link className="noDropdown" to="#"> Tipo De Pessoa </Link> </li>
            <li> <Link className="noDropdown" to="#"> Status </Link> </li>
            <li> <Link className="noDropdown" to="#"> Aniversariantes </Link> </li>
            <li> <Link className="noDropdown" to="#"> Vencimento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Geolocalização </Link> </li>
            <li> <Link className="noDropdown" to="#"> Crescimento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Status Alterado </Link> </li>
            <li> <Link className="noDropdown" to="#"> Abertos Recentes </Link> </li>
            <li> <Link className="noDropdown" to="#"> Alteração de Login </Link> </li>
            <li> <Link className="noDropdown" to="#"> Clientes Cadastrados </Link> </li>
            <li> <Link className="noDropdown" to="#"> Alteração de Mensalidade </Link> </li>
            <li> <Link className="noDropdown" to="#"> Alteração de Vencimento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Alteração de Bloqueio </Link> </li>
            <li> <Link className="noDropdown" to="#"> Localidade </Link> </li>
            <li> <Link className="noDropdown" to="#"> Resumo Automação </Link> </li>
            <li> <Link className="noDropdown" to="#"> Pesquisa </Link> </li>
        </ul>
    )
}