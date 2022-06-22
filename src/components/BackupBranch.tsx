import { Link } from "react-router-dom";

export function BackupBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="#">Criar Backup</Link> </li>
            <li> <Link className="noDropdown" to="#">Resturar Backup</Link> </li>
            <li> <Link className="noDropdown" to="#">Dowload do Servidor</Link> </li>
            <li> <Link className="noDropdown" to="#">Upload para Servidor</Link> </li>
            <li> <Link className="noDropdown" to="#">Deletar</Link> </li>
            <li> <Link className="noDropdown" to="#"> Eviar Backup</Link> </li>
            <li> <Link className="noDropdown" to="#">Backup Externo</Link> </li>
        </ul>
    )
}