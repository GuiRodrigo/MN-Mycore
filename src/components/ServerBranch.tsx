import { useState } from 'react'
import { Link } from 'react-router-dom'

import { HelpDeskBranch } from './ServerHelpDeskBranch'

export function ServerBranch() {

    const [isHelpDeskBranchOpen, setHelpDeskBranchOpen] = useState(false)

    return (
        <ul>
            <li> <Link className="noDropdown" to="/configuracoes/server/google-maps-api">Google Maps API</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/definicoes-padrao">Definições Padrão</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/painel-cliente">Painel do Cliente</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/sici">SICI</Link> </li>
            <li> <input type="checkbox" name="" id="HelpDeskBranch" onClick={() => { setHelpDeskBranchOpen(!isHelpDeskBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="HelpDeskBranch"></label>
                    <Link className="withDropdown" to="#">Help Desk</Link>
                </div>
                {isHelpDeskBranchOpen ?
                    <HelpDeskBranch />
                    : null}
            </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/procedimentos">Procedimentos</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/scripts">Scripts</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/zabbix">Zabbix</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/pesquisa">Pesquisa</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/bematech">Bematech</Link> </li>
            <li> <Link className="noDropdown" to="/configuracoes/server/fatura-automatica">Fatura Automática</Link> </li>
        </ul>
    )
}