import { Link } from 'react-router-dom'

export function WebAppBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Chamados Abertos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Help Desk </Link> </li>
            <li> <Link className="noDropdown" to="#"> Clientes </Link> </li>
        </ul>

    )
}