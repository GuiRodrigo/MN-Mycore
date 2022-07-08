import { Link } from 'react-router-dom'

export function F2BBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/F2B/parcelas"> Parcelas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/F2B/carnes"> Carnês </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/F2B/transacoes"> Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/F2B/erro-transacoes"> Erro de Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/F2B/debug-respostas"> Debug de Resposta </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/F2B/suporte-sem-fatura"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}