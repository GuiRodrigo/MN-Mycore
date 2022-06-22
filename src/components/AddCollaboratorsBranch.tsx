import { Link } from 'react-router-dom'

export function AddCollaboratorsBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/adicionar/dados-pessoais"> Dados Pessoais </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/adicionar/documentos"> Documentos </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/adicionar/endereco-contato"> Endereço/Contato </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/adicionar/dados-contratuais"> Dados Contratuais </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/colaboradores/adicionar/outros"> Outros </Link> </li>
        </ul>
    )
}