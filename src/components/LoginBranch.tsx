import { Link } from 'react-router-dom'

export function LoginBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/login/adicionar">Logins - Adicionar</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/login/fibra">Logins - Fibra</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/login/extrato">Logins - Extrato</Link></li>
        </ul>
    )
}