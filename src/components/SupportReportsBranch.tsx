import { Link } from "react-router-dom";

export function SupportReportsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Suportes em Andament </Link> </li>
            <li> <Link className="noDropdown" to="#"> Suportes Mensais - APP </Link> </li>
            <li> <Link className="noDropdown" to="#"> Materiais Técnicos </Link> </li>
        </ul>
    )
}