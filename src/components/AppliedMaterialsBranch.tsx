import { Link } from "react-router-dom"

export function AppliedMaterialsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/materiais-aplicados-todos">Todos</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/materiais-aplicados-abertos">Abertos</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/materiais-aplicados-discordou">Discordou</Link></li>
        </ul>
    )

}