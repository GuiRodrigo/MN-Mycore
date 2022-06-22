import { Link } from "react-router-dom";

export function ApplicationBranch() {
    return (
        <ul>
            <li><Link className="noDropdown" to="/configuracoes/aplicativo/tecnico">Técnico</Link> </li>
            <li><Link className="noDropdown" to="/configuracoes/aplicativo/cliente">Cliente</Link> </li>
            <li><Link className="noDropdown" to="/configuracoes/aplicativo/aparelhos">Aparelhos</Link> </li>
            <li><Link className="noDropdown" to="/configuracoes/aplicativo/imagens">Imagens</Link> </li>
        </ul>

    )
}