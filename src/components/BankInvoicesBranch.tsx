import { Link } from 'react-router-dom'

export function BankInvoicesBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/vencer"> A Vencer </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/vencer-hoje"> Vencimento Hoje </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/vencidas"> Vencidas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/liquidas"> Liquidas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/suportes-pagos"> Suportes Pagos </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/gerar-massa"> Gerar em Massa </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/imprimir-massa"> Imprimir em Massa </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/deletadas"> Deletadas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/abrir-fatura"> Abrir Fatura </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/faturas/fechar-fatura"> Pagar Fatura </Link> </li>
        </ul>
    )
}