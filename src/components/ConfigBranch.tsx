import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ServerBranch } from './ServerBranch'
import { AccessProfileBranch } from './AccessProfileBranch'
import { CompaniesAccountsBranch } from './CompaniesAccountsBranch'
import { ApplicationBranch } from './ApplicationBranch'
import { GroupsRadiusBranch } from './GroupsRadiusBranch'
import { ConfigContractsBranch } from './ConfigContractsBranch'
import { ServiceOrderBranch } from './ServiceOrderBranch'
import { BackupBranch } from './BackupBranch'
import { PaymentGatewayBranch } from './PaymentGatewayBranch'

export function ConfigBranch() {

    const [isServerBranchOpen, setServerBranchOpen] = useState(false)
    const [isAccessProfileBranchOpen, setAccessProfileBranchOpen] = useState(false)
    const [isCompaniesAccountsBranchOpen, setCompaniesAccountsBranchOpen] = useState(false)
    const [isAplicationBranchOpen, setAplicationBranchOpen] = useState(false)
    const [isGroupsRadiusBranchOpen, setGroupsRadiusBranchOpen] = useState(false)
    const [isConfigContractsBranchOpen, setConfigContractsBranchOpen] = useState(false)
    const [isServiceOrderBranchOpen, setServiceOrderBranchOpen] = useState(false)
    const [isBackupBranchOpen, setBackupBranchOpen] = useState(false)
    const [isPaymentGatewayBranchOpen, setPaymentGatewayBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="ServerBranch" onClick={() => { setServerBranchOpen(!isServerBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ServerBranch" ></label>
                    <Link className="withDropdown" to="#">Servidor</Link>
                </div>
                {isServerBranchOpen ?
                    <ServerBranch />
                    : null}
            </li>

            <li> <input type="checkbox" name="" id="AccessProfileBranch" onClick={() => { setAccessProfileBranchOpen(!isAccessProfileBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="AccessProfileBranch" ></label>
                    <Link className="withDropdown" to="/configuracoes/perfil-acesso">Perfil de Acesso</Link>
                </div>
                {isAccessProfileBranchOpen ?
                    <AccessProfileBranch />
                    : null}
            </li>

            <li> <input type="checkbox" name="" id="CompaniesAccountsBranch" onClick={() => { setCompaniesAccountsBranchOpen(!isCompaniesAccountsBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="CompaniesAccountsBranch" ></label>
                    <Link className="withDropdown" to="/configuracoes/empressas-contas">Empressa/Contas</Link>
                </div>
                {isCompaniesAccountsBranchOpen ?
                    <CompaniesAccountsBranch />
                    : null}

            </li>

            <li> <input type="checkbox" name="" id="ApplicationBranch" onClick={() => { setAplicationBranchOpen(!isAplicationBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ApplicationBranch" ></label>
                    <Link className="withDropdown" to="#">Aplicativo</Link>
                </div>
                {isAplicationBranchOpen ?
                    <ApplicationBranch />
                    : null}
            </li>

            <li  > <Link className="noDropdown" to="/configuracoes/api">API</Link> </li>

            <li> <input type="checkbox" name="" id="GroupsRadiusBranch" onClick={() => { setGroupsRadiusBranchOpen(!isGroupsRadiusBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="GroupsRadiusBranch" ></label>
                    <Link className="withDropdown" to="/configuracoes/grupos-radius">Grupos & Radios</Link>
                </div>
                {isGroupsRadiusBranchOpen ?
                    <GroupsRadiusBranch />
                    : null}
            </li>

            <li> <input type="checkbox" name="" id="ConfigContractsBranch" onClick={() => { setConfigContractsBranchOpen(!isConfigContractsBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ConfigContractsBranch" ></label>
                    <Link className="withDropdown" to="/configuracoes/contratos">Contratos</Link>
                </div>
                {isConfigContractsBranchOpen ?
                    <ConfigContractsBranch />
                    : null}
            </li>

            <li> <input type="checkbox" name="" id="ServiceOrderBranch" onClick={() => { setServiceOrderBranchOpen(!isServiceOrderBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="ServiceOrderBranch" ></label>
                    <Link className="withDropdown" to="/configuracoes/ordem-servico">Oderm de Serviços</Link>
                </div>
                {isServiceOrderBranchOpen ?
                    <ServiceOrderBranch />
                    : null}
            </li>

            <li  > <Link className="noDropdown" to="/configuracoes/backup">Telas de Avisos</Link> </li>

            <li> <input type="checkbox" name="" id="BackupBranch" onClick={() => { setBackupBranchOpen(!isBackupBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="BackupBranch" ></label>
                    <Link className="withDropdown" to="#">Backup</Link>
                </div>
                {isBackupBranchOpen ?
                    <BackupBranch />
                    : null}
            </li>

            <li className="noDropdown" > <Link to="/configuracoes/sms">SMS</Link> </li>

            <li  > <Link className="noDropdown" to="/configuracoes/smtp">SMTP</Link> </li>

            <li  > <Link className="noDropdown" to="/configuracoes/telegram">Telegram</Link> </li>

            <li  > <Link className="noDropdown" to="/configuracoes/whatsapp">Whatsapp</Link> </li>

            <li  > <Link className="noDropdown" to="/configuracoes/plano-contas">Plano de Contas</Link> </li>

            <li> <input type="checkbox" name="" id="PaymentGatewayBranch" onClick={() => { setPaymentGatewayBranchOpen(!isPaymentGatewayBranchOpen) }} />

                <div className="withLabel" >
                    <label htmlFor="PaymentGatewayBranch" ></label>
                    <Link className="withDropdown" to="#">Gateway de Pagamentos</Link>
                </div>
                {isPaymentGatewayBranchOpen ?
                    <PaymentGatewayBranch />
                    : null}
            </li>

        </ul>
    )
}