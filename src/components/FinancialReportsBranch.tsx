import { Link } from "react-router-dom";

export function FinancialReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Dashboard </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturas </Link> </li>
            <li> <Link className="noDropdown" to="#"> NF21 </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturamento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Comparativo </Link> </li>
            <li> <Link className="noDropdown" to="#"> Gráfico </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturas Vencidas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Promessa de Pagamento </Link> </li>
            <li> <Link className="noDropdown" to="#"> Cancelamento de Promessa </Link> </li>
            <li> <Link className="noDropdown" to="#"> Pagamento Duplicado </Link> </li>
            <li> <Link className="noDropdown" to="#"> Fluxo de Caixa </Link> </li>
            <li> <Link className="noDropdown" to="#"> Fluxo Diário </Link> </li>
            <li> <Link className="noDropdown" to="#"> Pagamento a Menor </Link> </li>
            <li> <Link className="noDropdown" to="#"> Pagamento a Menor - Liberado </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturas Restauradas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturas Deletadas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Remessas Desfeitas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Pagamentos Desfeitos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Contas Pagas/Alteradas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Faturas Venc./Receber </Link> </li>
        </ul>
    )
}