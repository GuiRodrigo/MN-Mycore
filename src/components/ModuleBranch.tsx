import { Link } from 'react-router-dom'
import { useState } from 'react'

import { ClientBranch } from './ClientBranch'
import { ConfigBranch } from './ConfigBranch'
import { PersonalDptBranch } from './PersonalDptBranch'
import { DrawnetBranch } from './DrawnetBranch'
import { InventoryBranch } from './InventoryBranch'
import { FinancialBranch } from './FinancialBranch'
import { HelpDeskBranch } from './HelpDeskBranch'
import { NetworkBranch } from './NetworkBranch'
import { ReportsBranch } from './ReportsBranch'
import { SICIBranch } from './SICIBranch'
import { WebAppBranch } from './WebAppBranch'

export function ModuleBranch() {

    const [isClientBranchOpen, setClientBranchOpen] = useState(false)
    const [isConfigBranchOpen, setConfigBranchOpen] = useState(false)
    const [isPersonalDptBranchOpen, setPersonalDptBranchOpen] = useState(false)
    const [isDrawnetBranchOpen, setDrawnetBranchOpen] = useState(false)
    const [isInventoryBranchOpen, setInventoryBranchOpen] = useState(false)
    const [isFinancialBranchOpen, setFinancialBranchOpen] = useState(false)
    const [isHelpDeskBranchOpen, setHelpDeskBranchOpen] = useState(false)
    const [isNetworkBranchOpen, setNetworkBranchOpen] = useState(false)
    const [isReportsBranchOpen, setReportsBranchOpen] = useState(false)
    const [isSICIBranchOpen, setSICIBranchOpen] = useState(false)
    const [isWebAppBranchOpen, setWebAppBranchOpen] = useState(false)


    return (
        <ul>
            <li>

                <input type="checkbox" name="" id="ClientBranch" onClick={() => { setClientBranchOpen(!isClientBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="ClientBranch"></label>
                    <Link className="withDropdown" to="/cliente">Clientes</Link>
                </div>
                {isClientBranchOpen ?
                    <ClientBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="ConfigBranch" onClick={() => { setConfigBranchOpen(!isConfigBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="ConfigBranch"></label>
                    <Link className="withDropdown" to="/configuracoes">Configurações</Link>
                </div>
                {isConfigBranchOpen ?
                    <ConfigBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="PersonalDptBranch" onClick={() => { setPersonalDptBranchOpen(!isPersonalDptBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="PersonalDptBranch"></label>
                    <Link className="withDropdown" to="/dpt-pessoal">Depto.Pessoal</Link>
                </div>
                {isPersonalDptBranchOpen ?
                    <PersonalDptBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="DrawnetBranch" onClick={() => { setDrawnetBranchOpen(!isDrawnetBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="DrawnetBranch"></label>
                    <Link className="withDropdown" to="/drawnet">Drawnet</Link>
                </div>
                {isDrawnetBranchOpen ?
                    <DrawnetBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="InventoryBranch" onClick={() => { setInventoryBranchOpen(!isInventoryBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="InventoryBranch"></label>
                    <Link className="withDropdown" to="/estoque">Estoque</Link>
                </div>
                {isInventoryBranchOpen ?
                    <InventoryBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="FinancialBranch" onClick={() => { setFinancialBranchOpen(!isFinancialBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="FinancialBranch"></label>
                    <Link className="withDropdown" to="/financeiro">Financeiro</Link>
                </div>
                {isFinancialBranchOpen ?
                    <FinancialBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="HelpDeskBranch" onClick={() => { setHelpDeskBranchOpen(!isHelpDeskBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="HelpDeskBranch"></label>
                    <Link className="withDropdown" to="/help-desk">Help-Desk</Link>
                </div>
                {isHelpDeskBranchOpen ?
                    <HelpDeskBranch />
                    : null}
            </li>


            <li><Link className="noDropdown" to="/materiais">Materiasis</Link></li>


            <li><Link className="noDropdown" to="/meu-caixa">Menu-Caixa</Link></li>


            <li>
                <input type="checkbox" name="" id="NetworkBranch" onClick={() => { setNetworkBranchOpen(!isNetworkBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="NetworkBranch"></label>
                    <Link className="withDropdown" to="/network">Network</Link>
                </div>
                {isNetworkBranchOpen ?
                    <NetworkBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="ReportsBranch" onClick={() => { setReportsBranchOpen(!isReportsBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="ReportsBranch"></label>
                    <Link className="withDropdown" to="/relatorios">Relatórios</Link>
                </div>
                {isReportsBranchOpen ?
                    <ReportsBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="SICIBranch" onClick={() => { setSICIBranchOpen(!isSICIBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="SICIBranch"></label>
                    <Link className="withDropdown" to="#">SICI</Link>
                </div>
                {isSICIBranchOpen ?
                    <SICIBranch />
                    : null}
            </li>


            <li>
                <input type="checkbox" name="" id="WebAppBranch" onClick={() => { setWebAppBranchOpen(!isWebAppBranchOpen) }} />
                <div className="withLabel" >
                    <label htmlFor="WebAppBranch"></label>
                    <Link className="withDropdown" to="#">WebApp</Link>
                </div>
                {isWebAppBranchOpen ?
                    <WebAppBranch />
                    : null}
            </li>


            <li>
                <Link className="noDropdown" to="#">WebMail</Link>


            </li>


            <li>
                <Link className="noDropdown" to="#">WebSMS</Link>


            </li>


            <li>
                <Link className="noDropdown" to="#">Whatsapp</Link>


            </li>


            <li>
                <Link className="noDropdown" to="#">VOIP</Link>


            </li>


        </ul>
    )
}

