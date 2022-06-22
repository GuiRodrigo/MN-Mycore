import { Link } from "react-router-dom";

export function PointSheetBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-ponto/folha-ponto"> Folha de Ponto </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-ponto/controle-ponto"> Controle de Ponto </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-ponto/fechamento-ponto"> Fechamento de Ponto </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/folha-ponto/importar-ponto"> Importar Ponto </Link> </li>
        </ul>
    )
}