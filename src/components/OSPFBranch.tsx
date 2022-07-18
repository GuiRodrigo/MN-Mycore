import { Link } from "react-router-dom";

export function OSPFBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/distribuicao"> Distribuição </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/interfaces"> Interfaces </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/areas"> Áreas </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/network"> Network </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/vizinhos"> Vizinhos </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/rotas"> Rotas </Link> </li>
            <li> <Link className="noDropdown" to="/network/roteamento/ospf/log"> Log </Link> </li>
        </ul>
    )
}