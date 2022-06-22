import { Link } from "react-router-dom";

export function InventoryBranch() {
    return (
        <ul>
            <li><Link className="noDropdown" to="/estoque/entradas"> Entradas </Link> </li>
            <li><Link className="noDropdown" to="/estoque/inventario"> Estoque </Link> </li>
            <li><Link className="noDropdown" to="/estoque/saida-operador"> Saídas Operador </Link> </li>
            <li><Link className="noDropdown" to="/estoque/saida-cliente"> Saídas Cliente </Link> </li>
            <li><Link className="noDropdown" to="/estoque/almoxarifado"> Almoxarifado </Link> </li>
            <li><Link className="noDropdown" to="/estoque/definir-seriais"> Definir Seriais </Link> </li>
            <li><Link className="noDropdown" to="/estoque/alocar-seriais"> Alocar por Serial </Link> </li>
            <li><Link className="noDropdown" to="/estoque/importar-nf"> Importar NF-e 55 </Link> </li>
        </ul>
    )
}