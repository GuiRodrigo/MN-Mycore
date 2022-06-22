import { Link } from "react-router-dom";

export function SettingsDtpBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/adicionar-departamento"> Adiconar Departamento </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/adicionar-cargo"> Adicionar Cargo </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/adicionar-turno"> Adicionar Turno </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/gerenciar-turno"> Gerenciar Turno </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/areas-risco"> Áreas de Risco </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/sindicato"> Sindicato </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/documentos"> Documentos </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/referencias"> Referências </Link> </li>
            <li> <Link className="noDropdown" to="/dpt-pessoal/configuracoes/hora-extra"> Hora Extra </Link> </li>
        </ul>
    )
}