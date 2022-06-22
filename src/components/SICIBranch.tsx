import { Link } from 'react-router-dom'

export function SICIBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Pontos de Presença </Link> </li>
            <li> <Link className="noDropdown" to="#"> Infraestrutura </Link> </li>
            <li> <Link className="noDropdown" to="#"> Investimento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Financeiro </Link> </li>
        </ul>
    )
}