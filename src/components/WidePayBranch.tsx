import { Link } from "react-router-dom";

export function WidePayBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/wide-pay/carnes-parcelas"> Carnês/Parcelas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/wide-pay/transacoes"> Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/wide-pay/erro-transacoes"> Erro de Transações </Link> </li>
            <li> <Link className="noDropdown" to="#"> Debug de Resposta </Link> </li>
            <li> <Link className="noDropdown" to="#"> Suportes sem Fatura </Link> </li>
        </ul>

    )
}