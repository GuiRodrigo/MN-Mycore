import { Link } from "react-router-dom";

export function EditBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/editar-dados-cliente">Editar - Dados do Cliente</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/editar-endereco">Endereço</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/editar-contato">Contato</Link></li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/editar-automacao">Automação</Link></li>
        </ul>
    )
}