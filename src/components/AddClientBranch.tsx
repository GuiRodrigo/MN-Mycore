import { Link } from 'react-router-dom'

export function AddClienteBranch() {
    return (
        <ul>
            <li>
                <Link className="noDropdown" to="/cliente/adicionar/dados">Adicionar Dados</Link>

            </li>
            <li>
                <Link className="noDropdown" to="/cliente/adicionar/endereco">Adicionar Endereço</Link>

            </li>
            <li>
                <Link className="noDropdown" to="/cliente/adicionar/contato">Adicionar Contato</Link>

            </li>
            <li>
                <Link className="noDropdown" to="/cliente/adicionar/automacao">Adicionar Automação</Link>

            </li>
        </ul>
    )
}