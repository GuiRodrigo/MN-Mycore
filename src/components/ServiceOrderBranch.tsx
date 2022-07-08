import { Link } from "react-router-dom";

export function ServiceOrderBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/ordem-servico/existente">OS Existente</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/ordem-servico/nova">Nova OS</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/ordem-servico/opcoes">OS - Opções</Link> </li>
        </ul>
    )
}