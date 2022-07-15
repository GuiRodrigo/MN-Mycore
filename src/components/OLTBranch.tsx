import { Link } from "react-router-dom";

export function OLTBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/olt/datacon"> Datacon </Link> </li>
            <li> <Link className="noDropdown" to="/network/olt/huawei"> Huawei </Link> </li>
            <li> <Link className="noDropdown" to="/network/olt/servidor-ftp"> Servidor FTP </Link> </li>
        </ul>
    )
}