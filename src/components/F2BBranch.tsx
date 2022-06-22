import { Link } from 'react-router-dom'

export function F2BBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Parcelas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Carnês </Link> </li>
            <li> <Link className="noDropdown" to="#"> Transações </Link> </li>
            <li> <Link className="noDropdown" to="#"> Erro de Transações </Link> </li>
            <li> <Link className="noDropdown" to="#"> Debug de Resposta </Link> </li>
            <li> <Link className="noDropdown" to="#"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}