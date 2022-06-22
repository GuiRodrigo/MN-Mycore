import { Link } from "react-router-dom";

export function ListCollaboratorsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/upload-arquivo">Upload de Arquivos</Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/ver-dados">Ver Dados</Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/editar">Editar</Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/dependencias">Dependentes</Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/beneficios">Beneficios</Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/listar/">Vincular Escala</Link> </li>
        </ul>

    )
}