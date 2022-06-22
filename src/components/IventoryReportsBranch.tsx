import { Link } from "react-router-dom";

export function IventoryReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Operador </Link> </li>
            <li> <Link className="noDropdown" to="#"> Gráfico de Operadores </Link> </li>
            <li> <Link className="noDropdown" to="#"> Analitico </Link> </li>
            <li> <Link className="noDropdown" to="#"> Patrimonio </Link> </li>
            <li> <Link className="noDropdown" to="#"> Movimentação </Link> </li>
            <li> <Link className="noDropdown" to="#"> Ajuste Almoxarifado </Link> </li>
            <li> <Link className="noDropdown" to="#"> Materiais Aplicados </Link> </li>
            <li> <Link className="noDropdown" to="#"> Materiais Retirados </Link> </li>
        </ul>
    )
}