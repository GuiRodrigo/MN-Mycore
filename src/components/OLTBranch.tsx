import { Link } from "react-router-dom";

export function OLTBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#"> Datacon </Link> </li>
            <li> <Link className="noDropdown" to="#"> Huawei </Link> </li>
            <li> <Link className="noDropdown" to="#"> Servidor FTP </Link> </li>
        </ul>
    )
}