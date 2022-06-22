import { Link } from "react-router-dom"

export function ViewBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/visualizar-cliente">Visualizar Clientes</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/visualizar-mapa">Visualizar Mapa</Link> </li>
        </ul>
    )
}