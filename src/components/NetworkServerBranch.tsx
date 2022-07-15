import { Link } from "react-router-dom";

export function NetworkServerBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/servidor/ip-aliases-gateway"> IP,aliases e gateway </Link> </li>
        </ul>
    )
}