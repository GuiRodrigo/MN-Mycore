import { Link } from "react-router-dom";

export function BoletoFácilBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/boleto-facil/carnes-parcelas"> Carnês/Parcelas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/boleto-facil/transacoes"> Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/boleto-facil/erro-transacoes"> Erro de Transações </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/boleto-facil/debug-resposta"> Debug de Resposta </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/boleto-facil/suporte-sem-fatura"> Suportes sem Fatura </Link> </li>
        </ul>
    )
}