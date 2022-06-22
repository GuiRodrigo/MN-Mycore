import { Link } from "react-router-dom";

export function DrawNetworkBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/drawnet/desenhar-rede/desenhar"> Desenhar </Link> </li>
            <li> <Link className="noDropdown" to="/drawnet/desenhar-rede/cadastro-cabos-equipamentos"> Cadastro de Cabos e Equipamentos </Link> </li>
            <li> <Link className="noDropdown" to="/drawnet/desenhar-rede/formas"> Desenhar Formas </Link> </li>
            <li> <Link className="noDropdown" to="/drawnet/desenhar-rede/configuracoes"> Configuração </Link> </li>
        </ul>
    )
}