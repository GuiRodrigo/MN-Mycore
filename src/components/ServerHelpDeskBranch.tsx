import { Link } from 'react-router-dom'

export function HelpDeskBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/server/help-desk/tipo-servico">Tipo de Serviço</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/help-desk/motivo-fechamento">Motivo de Fechamento</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/help-desk/grupo-operadores">Grupo/Operadores</Link> </li>
        </ul>
    )
}