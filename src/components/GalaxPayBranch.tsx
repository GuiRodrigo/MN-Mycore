import { Link } from 'react-router-dom'

export function GalaxPayBranch() {
    return (
        <ul>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/parcelas"> Parcelas </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/carnes"> Carnês </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/transacoes"> Transações </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/erro-transacoes"> Erro de Transações </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/debug-respostas"> Debug de Resposta </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/imprimir-massa"> Imprimir em Massa </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/galaxy-pay/suporte-sem-fatura"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}