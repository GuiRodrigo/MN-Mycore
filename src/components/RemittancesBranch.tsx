import { Link } from "react-router-dom";

export function RemittancesBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/financeiro/banco/remessas/listar-fatura"> Listar Faturas </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/remessas/gerar-todos"> Gerar Todos </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/remessas/gerar-selecionados"> Gerar Selecionados </Link> </li>
            <li> <Link className="noDropdown" to="/financeiro/banco/remessas/arquivo"> Arquivo </Link> </li>
        </ul>
    )
}