import { Link } from 'react-router-dom'

export function ConfigContractsBranch() {
    return (
        <ul>
            <li><Link className="noDropdown" to="#">Contrato Existente</Link> </li>
            <li><Link className="noDropdown" to="#">Novo Contrato</Link> </li>
            <li><Link className="noDropdown" to="#">Contrato - Opções</Link> </li>
        </ul>
    )
}