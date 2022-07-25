import { Link } from "react-router-dom";

export function FinancialReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/dashboard"> Dashboard </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/faturas"> Faturas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/nf21"> NF21 </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/faturamento"> Faturamento </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/comparativo"> Comparativo </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/grafico"> Gráfico </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/faturas-vencidas"> Faturas Vencidas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/promessa-pagamento"> Promessa de Pagamento </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/cancelamento-promessa"> Cancelamento de Promessa </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/pagamento-duplicado"> Pagamento Duplicado </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/fluxo-caixa"> Fluxo de Caixa </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/fluxo-diario"> Fluxo Diário </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/pagamento-menor"> Pagamento a Menor </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/pagameto-menor-liberado"> Pagamento a Menor - Liberado </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/faturas-restauradas"> Faturas Restauradas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeirofaturas-deletadas/"> Faturas Deletadas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/remessas-desfeitas"> Remessas Desfeitas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/pagamentos-desfeito"> Pagamentos Desfeitos </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/contas-pagar "> Contas Pagas/Alteradas </Link> </li>
            <li> <Link className="noDropdown" to="/relatorios/financeiro/faturas-vencidas"> Faturas Venc./Receber </Link> </li>
        </ul>
    )
}