import { Link } from "react-router-dom";

export function PulsarPayBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/parcelas"> Parcelas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/carnes"> Carnês </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/transacoes"> Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/erro-transacoes"> Erro de Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/debug-resposta"> Debug de Resposta </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/pulsar-pay/suporte-sem-fatura"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}