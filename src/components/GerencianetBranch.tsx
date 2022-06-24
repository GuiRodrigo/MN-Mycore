import { Link } from "react-router-dom";

export function GerencianetBranch() {
    return (
        <ul>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/carnes-parcelas"> Carnês/Parcelas </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/transacoes"> Transações </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/erro-transacoes"> Erro de Transações </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/debug-resposta"> Debug de Resposta </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/imprimir-massa"> Imprimir em Massa </Link> </li>
            <li><Link className="noDropdown" to="/financeiro/gerencianet/suporte-sem-fatura"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}