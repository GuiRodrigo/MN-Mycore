import { Link } from "react-router-dom";

export function OSPFBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Distribuição </Link> </li>
            <li> <Link className="noDropdown" to="#"> Interfaces </Link> </li>
            <li> <Link className="noDropdown" to="#"> Áreas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Network </Link> </li>
            <li> <Link className="noDropdown" to="#"> Vizinhos </Link> </li>
            <li> <Link className="noDropdown" to="#"> Rotas </Link> </li>
            <li> <Link className="noDropdown" to="#"> Log </Link> </li>
        </ul>
    )
}