import { Link } from "react-router-dom";

export function ClientReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/relatorios/clientes/bairro"> Bairro </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/cidade"> Cidade </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/tipo-pessoa"> Tipo De Pessoa </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/status"> Status </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/aiversariantes"> Aniversariantes </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/vencimento"> Vencimento </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/geolocalizacao"> Geolocalização </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/crescimento"> Crescimento </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/status-alterado"> Status Alterado </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/abertos-rececentes"> Abertos Recentes </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/alteracao-login"> Alteração de Login </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/clientes-cadastrados"> Clientes Cadastrados </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/alteracao-mensalidade"> Alteração de Mensalidade </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/alteracao-vencimento"> Alteração de Vencimento </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/alteracao-bloqueio"> Alteração de Bloqueio </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/localidade"> Localidade </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/resumo-automacao"> Resumo Automação </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/clientes/pesquisa"> Pesquisa </Link> </li>
        </ul>
    )
}