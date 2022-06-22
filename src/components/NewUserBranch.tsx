import { Link } from "react-router-dom";

export function NewUserBranch() {
    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/login">Login</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/adiministrador-cliente">Administrador/Cliente</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/financeiro">Finaceiro</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/help-desk">Help Desk</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/estoque">Estoque</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/redes">Redes</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/contrato">Contrato</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/relatorios">Relatórios</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/radius">Radius</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/departamento-pessoal">Departamento Pessoal</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/e-social">e - Social</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/web-sms">WebSMS</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/perfil-acesso/novo-usuario/web-mail">WebMail</Link> </li>
        </ul>
    )
}