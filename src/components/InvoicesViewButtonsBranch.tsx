import { Link } from 'react-router-dom'

export function InvoicesViewButtonsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-abertas">Abertas</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-selecionadas">Selecionada</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-visualizar">Visualizar</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-impressao">Modo De Imprensão</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-imprimir">Imprimir</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-sms">Envio SMS</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-email">Enviar E-Mail</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-deletar-selecionadas">Deletar Selecionados</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-imprimir-selecionadas">Imprimir Selecionados</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-adicionar">Adicionar</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-selecionar-todas">Selecionar Todas</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-desmarcar-todas">Desmarcar Todas</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-baixa-retorno">Baixa por Retorno</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-baixa-manual">Baixa Manual</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-baixa-cartao-credito">Baixa por C. Cred.</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-promessa-pagamento">Promessa de Pagamento</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-deletadas">Deletados</Link> </li>
            <li> <Link className="noDropdown" to="/cliente/menu-mouse/faturas-todos">Todos</Link> </li>
        </ul>
    )
}