import { Link } from 'react-router-dom'

export function InvoicesMouseMenuBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/editar">Editar/Realizar Baixa Manual</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/deletar">Deletar</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/restaurar">Restaurar Deletado</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/desconto-conexao">desc. p/ Falta de Conexão</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/desfazer-pagamento">Desfazer Pagamento</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/desfazer-remessa">Desfazer Remessa</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-menu/mudar-baixa-manual">Mudar p/ Baixa Manual</Link> </li>
        </ul>
    )
}