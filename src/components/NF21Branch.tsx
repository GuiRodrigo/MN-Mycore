import { Link } from "react-router-dom";

export function NF21Branch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/escolher-registro"> Escolher Registro </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/notas-emitidas"> Notas Emitidas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/gerar-selecionados"> Gerar Selecionados </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/gerar-todos"> Gerar Todos </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/gerar-arquivos"> Gerar Arquivos </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/arquivos"> Arqivos </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/nf-21/depurar-logs"> Depurar Logs </Link> </li>
        </ul>
    )
}