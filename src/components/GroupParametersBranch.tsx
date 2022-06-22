import { Link } from 'react-router-dom'

export function GroupParametersBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/parametros/cliente-grupo">Clientes Neste Grupo</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/parametros/editar-grupo">Editar Grupo</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/grupos-radius/parametros/deletar-grupo">Deletar Grupo</Link> </li>
        </ul>
    )
}