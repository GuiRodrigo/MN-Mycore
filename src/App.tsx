import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { TestPage } from './pages/TestPage'

import { PoliticaSuporte } from './pages/politica-de-suporte/Politica-Suporte'
import { RequisitosInstalação } from './pages/Requisitos-Insatalação/RequisitosInstalação'

/* <-------------------------------------------------------CLIENTE-------------------------------------------------------------------------------> */

import { Client } from './pages/clientes/Client'

import { AddClient } from './pages/clientes/AddClient'
import { AddDataClient } from './pages/clientes/AddDataClient'
import { AddAdressClient } from './pages/clientes/AddAdressClient'
import { AddContactCliente } from './pages/clientes/AddContactCliente'
import { AddAutomationClient } from './pages/clientes/AddAutomationClient'

import { ClientMouseMenu } from './pages/clientes/ClientMouseMenu'
import { ClientMenuMouseLogin } from './pages/clientes/ClientMenuMouseLogin'
import { ClienteMouseMenuLoginAdd } from './pages/clientes/ClienteMouseMenuLoginAdd'
import { ClienteMouseMenuLoginFiber } from './pages/clientes/ClienteMouseMenuLoginFiber'
import { ClientMouseMenuLoginExtract } from './pages/clientes/ClientMouseMenuLoginExtract'

import { ClientMouseMenuNF21 } from './pages/clientes/ClientMouseMenuNF21'

import { ClientMouseMenuViewClient } from './pages/clientes/ClientMouseMenuViewClient'
import { ClienteMouseMenuViewMap } from './pages/clientes/ClientMouseMenuViewMap'

import { ClientMouseMenuInvoicesOpen } from './pages/clientes/ClientMouseMenuInvoicesOpen'
import { ClientMouseMenuInvoicesSelect } from './pages/clientes/ClientMouseMenuInvoicesSelect'
import { ClientMouseMenuInvoicesView } from './pages/clientes/ClientMouseMenuInvoicesView'
import { ClientMouseMenuInvoicesPrint } from './pages/clientes/ClientMouseMenuInvoicesPrint'
import { ClientMouseMenuInvoicesToPrint } from './pages/clientes/ClientMouseMenuInvoicesToPrint'
import { ClientMouseMenuInvoicesSMS } from './pages/clientes/ClientMouseMenuInvoicesSMS'
import { ClientMouseMenuInvoicesEmail } from './pages/clientes/ClientMouseMenuInvoicesEmail'
import { ClientMouseMenuInvoicesDeletSelect } from './pages/clientes/ClientMouseMenuInvoicesDeletSelect'
import { ClientMouseMenuInvoicesPrintSelect } from './pages/clientes/ClientMouseMenuInvoicesPrintSelect'
import { ClientMouseMenuInvoicesAdd } from './pages/clientes/ClientMouseMenuInvoicesAdd'
import { ClientMouseMenuInvoicesSelectAll } from './pages/clientes/ClientMouseMenuInvoicesSelectAll'
import { ClientMouseMenuInvoicesDeselectAll } from './pages/clientes/ClientMouseMenuInvoicesDeselectAll'
import { ClientMouseMenuInvoicesDowloadReturn } from './pages/clientes/ClientMouseMenuInvoicesDownloadReturn'
import { ClientMouseMenuInvoicesDowloadManual } from './pages/clientes/ClientMouseMenuInvoicesDowloadManual'
import { ClientMouseMenuInvoicesDowloadCreditCard } from './pages/clientes/ClientMouseMenuInvoicesDowloadCreditCard'
import { ClientMouseMenuInvoicesPromisePayment } from './pages/clientes/ClientMouseMenuInvoicesPromisePayment'
import { ClientMouseMenuInvoicesDelet } from './pages/clientes/ClientMouseMenuInvoicesDelet'
import { ClientMouseMenuInvoicesAll } from './pages/clientes/ClientMouseMenuInvoicesAll'

import { ClientMouseMenuInvoicesMenu } from './pages/clientes/ClientMouseMenuInvoicesMenu'
import { ClientMouseMenuInvoicesMenuEdit } from './pages/clientes/ClientMouseMenuInvoicesMenuEdit'
import { ClientMouseMenuInvoicesMenuDelet } from './pages/clientes/ClientMouseMenuInvoicesMenuDelet'
import { ClientMouseMenuInvoicesMenuDiscountConnection } from './pages/clientes/ClientMouseMenuInvoicesMenuDiscountConnection'
import { ClientMouseMenuInvoicesMenuUndoPayment } from './pages/clientes/ClientMouseMenuInvoicesMenuUndoPayment'
import { ClientMouseMenuInvoicesMenuUndoShipment } from './pages/clientes/ClientMouseMenuInvoicesMenuUndoShipment'
import { ClientMouseMenuInvoicesMenuChangeManualDownload } from './pages/clientes/ClientMouseMenuInvoicesMenuChangeManualDownload'

import { ClientMouseMenuOpenCalls } from './pages/clientes/ClientMouseMenuOpenCalls'
import { ClientMouseMenuCloseCalls } from './pages/clientes/ClientMouseMenuCloseCalls'
import { ClientMouseMenuAllCalls } from './pages/clientes/ClientMouseMenuAllCalls'

import { ClientMouseMenuMaterialsAppliedAll } from './pages/clientes/ClientMouseMenuMaterialsAppliedAll'
import { ClientMouseMenuMaterialsAppliedOpen } from './pages/clientes/ClientMouseMenuMaterialsAppliedOpen'
import { ClientMouseMenuMaterialsAppliedAllDisagreed } from './pages/clientes/ClientMouseMenuMaterialsAppliedAllDisagreed'

import { ClientMouseMenuEditDataClient } from './pages/clientes/ClientMouseMenuEditDataClient'
import { ClientMouseMenuEditAdress } from './pages/clientes/ClientMouseMenuEditAdress'
import { ClientMouseMenuEditContract } from './pages/clientes/ClientMouseMenuEditContract'
import { ClientMouseMenuEditAutomation } from './pages/clientes/ClientMouseMenuEditAutomation'

/* <--------------------------------------------------------CONFIGURAÇÕES------------------------------------------------------------------------------> */

import { Config } from './pages/configuracoes/Config'
import { ConfigServerMapsAPI } from './pages/configuracoes/ConfigServerMapsAPI'
import { ConfigServerSettingsDefault } from './pages/configuracoes/ConfigServerSettingsDefault'
import { ConfigServerPanelClient } from './pages/configuracoes/ConfigServerPanelClient'
import { ConfigServerSICI } from './pages/configuracoes/ConfigServerSICI'
import { ConfigServerProcedures } from './pages/configuracoes/ConfigServerProcedures'
import { ConfigServerScripts } from './pages/configuracoes/ConfigServerScripts'
import { ConfigServerZabbix } from './pages/configuracoes/ConfigServerZabbix'
import { ConfigServerSearch } from './pages/configuracoes/ConfigServerSearch'
import { ConfigServerBematech } from './pages/configuracoes/ConfigServerBematech'
import { ConfigServerInvoiceAutomatic } from './pages/configuracoes/ConfigServerInvoiceAutomatic'

import { ConfigServerHelpDeskServiceType } from './pages/configuracoes/ConfigServerHelpDeskServiceType'
import { ConfigServerHelpDeskReasonClosing } from './pages/configuracoes/ConfigServerHelpDeskReasonClosing'
import { ConfigServerHelpDeskGroupsOperators } from './pages/configuracoes/ConfigServerHelpDeskGroupsOperators'

import { ConfigProfileAccess } from './pages/configuracoes/ConfigProfileAccess'
import { ConfigProfileAccessNewUserLogin } from './pages/configuracoes/ConfigProfileAccessNewUserLogin'
import { ConfigProfileAccessNewUserAdministradorCliente } from './pages/configuracoes/ConfigProfileAccessNewUserAdministradorCliente'
import { ConfigProfileAccessNewUserInvoices } from './pages/configuracoes/ConfigProfileAccessNewUserInvoices'
import { ConfigProfileAccessNewUserHelpDesk } from './pages/configuracoes/ConfigProfileAccessNewUserHelpDesk'
import { ConfigProfileAccessNewUserStock } from './pages/configuracoes/ConfigProfileAccessNewUserStock'
import { ConfigProfileAccessNewUserNetwork } from './pages/configuracoes/ConfigProfileAccessNewUserNetwork'
import { ConfigProfileAccessNewUserContract } from './pages/configuracoes/ConfigProfileAccessNewUserContract'
import { ConfigProfileAccessNewUserReports } from './pages/configuracoes/ConfigProfileAccessNewUserReports'
import { ConfigProfileAccessNewUserRadius } from './pages/configuracoes/ConfigProfileAccessNewUserRadius'
import { ConfigProfileAccessNewUserDepartmentPersonal } from './pages/configuracoes/ConfigProfileAccessNewUserDepartmentPersonal'
import { ConfigProfileAccessNewUserSocial } from './pages/configuracoes/ConfigProfileAccessNewUserSocial'
import { ConfigProfileAccessNewUserWebSMS } from './pages/configuracoes/ConfigProfileAccessNewUserWebSMS'
import { ConfigProfileAccessNewUserWebMail } from './pages/configuracoes/ConfigProfileAccessNewUserWebMail'

import { ConfigCompaniesAccounts } from './pages/configuracoes/ConfigCompaniesAccounts'
import { ConfigCompaniesAccountsCompany } from './pages/configuracoes/ConfigCompaniesAccountsCompany'
import { ConfigCompaniesAccountsDataBank } from './pages/configuracoes/ConfigCompaniesAccountsDataBank'

import { ConfigApplicationTechnical } from './pages/configuracoes/ConfigApplicationTechnical'
import { ConfigApplicationClient } from './pages/configuracoes/ConfigApplicationClient'
import { ConfigApplicationAppliances } from './pages/configuracoes/ConfigApplicationAppliances'
import { ConfigApplicationImages } from './pages/configuracoes/ConfigApplicationImages'

import { ConfigApi } from './pages/configuracoes/ConfigApi'

import { ConfigRadiusGroups } from './pages/configuracoes/ConfigRadiusGroups'
import { ConfigRadiusGroupsParameters } from './pages/configuracoes/ConfigRadiusGroupsParameters'
import { ConfigRadiusGroupsParametersClienteGroup } from './pages/configuracoes/ConfigRadiusGroupsParametersClienteGroup'
import { ConfigRadiusGroupsParametersEditGroup } from './pages/configuracoes/ConfigRadiusGroupsParametersEditGroup'
import { ConfigRadiusGroupsParametersDeleteGroup } from './pages/configuracoes/ConfigRadiusGroupsParametersDeleteGroup'
import { ConfigRadiusGroupsConfiguration } from './pages/configuracoes/ConfigRadiusGroupsConfiguration'
import { ConfigRadiusGroupsLinkFull } from './pages/configuracoes/ConfigRadiusGroupsLinkFull'
import { ConfigRadiusGroupsDomain } from './pages/configuracoes/ConfigRadiusGroupsDomain'
import { ConfigRadiusGroupsPoolRadius } from './pages/configuracoes/ConfigRadiusGroupsPoolRadius'
import { ConfigRadiusGroupsBRass } from './pages/configuracoes/ConfigRadiusGroupsBRass'
import { ConfigRadiusGroupsMikrotikExport } from './pages/configuracoes/ConfigRadiusGroupsMikrotikExport'

import { ConfigContracts } from './pages/configuracoes/ConfigContracts'
import { ConfigContractsExisting } from './pages/configuracoes/ConfigContractsExisting'
import { ConfigContractsNew } from './pages/configuracoes/ConfigContractsNew'
import { ConfigContractsOptions } from './pages/configuracoes/ConfigContractsOptions'

import { ConfigOrderService } from './pages/configuracoes/ConfigOrderService'
import { ConfigOrderServiceExisting } from './pages/configuracoes/ConfigOrderServiceExisting'
import { ConfigOrderServiceNew } from './pages/configuracoes/ConfigOrderServiceNew'
import { ConfigOrderServiceOptions } from './pages/configuracoes/ConfigOrderServiceOptions'

import { ConfigBackup } from './pages/configuracoes/ConfigBackup'
import { ConfigBackupCreate } from './pages/configuracoes/ConfigBackupCreate'
import { ConfigBackupRestore } from './pages/configuracoes/ConfigBackupRestore'
import { ConfigBackupDownloadServer } from './pages/configuracoes/ConfigBackupDownloadServer'
import { ConfigBackupUploadServer } from './pages/configuracoes/ConfigBackupUploadServer'
import { ConfigBackupDelete } from './pages/configuracoes/ConfigBackupDelete'
import { ConfigBackupSend } from './pages/configuracoes/ConfigBackupSend'
import { ConfigBackupExternal } from './pages/configuracoes/ConfigBackupExternal'

import { ConfigSMS } from './pages/configuracoes/ConfigSMS'

import { ConfigSMTP } from './pages/configuracoes/ConfigSMTP'

import { ConfigTelegram } from './pages/configuracoes/ConfigTelegram'

import { ConfigWhatsapp } from './pages/configuracoes/ConfigWhatsapp'

import { ConfigPlanAccounts } from './pages/configuracoes/ConfigPlanAccounts'

import { ConfigGatewayPaymentGerencianet } from './pages/configuracoes/ConfigGatewayPaymentGerencianet'
import { ConfigGatewayPaymentWidePay } from './pages/configuracoes/ConfigGatewayPaymentWidePay'
import { ConfigGatewayPaymentGalaxpay } from './pages/configuracoes/ConfigGatewayPaymentGalaxpay'
import { ConfigGatewayPaymentF2B } from './pages/configuracoes/ConfigGatewayPaymentF2B'
import { ConfigGatewayPaymentBoletoEasy } from './pages/configuracoes/ConfigGatewayPaymentBoletoEasy'
import { ConfigGatewayPaymentPulsarPay } from './pages/configuracoes/ConfigGatewayPaymentPulsarPay'
import { ConfigGatewayPagamentoPagSeguro } from './pages/configuracoes/ConfigGatewayPagamentoPagSeguro'
import { ConfigGatewayPaymentCielo } from './pages/configuracoes/ConfigGatewayPaymentCielo'

/* <----------------------------------------------------DEPARTAMENTO PESSOAL----------------------------------------------------------------------------> */

import { DepartmentPersonal } from './pages/dept.Pessoal/DepartmentPersonal'
import { DepartmentPersonalEmployeesList } from './pages/dept.Pessoal/DepartmentPersonalEmployeesList'
import { DepartmentPersonalEmployeesListUploadArchive } from './pages/dept.Pessoal/DepartmentPersonalEmployeesListUploadArchive'
import { DepartmentPersonalEmployeesListSeeData } from './pages/dept.Pessoal/DepartmentPersonalEmployeesListSeeData'
import { DepartmentPersonalEmployeesListEdit } from './pages/dept.Pessoal/DepartmentPersonalEmployeesListEdit'
import { DepartmentPersonalEmployeesListDependents } from './pages/dept.Pessoal/DepartmentPersonalEmployeesListDependents'
import { DepartmentPersonalEmployeesListBenefits } from './pages/dept.Pessoal/DepartmentPersonalEmployeesListBenefits'

import { DepartmentPersonalEmployeesAddPersonalData } from './pages/dept.Pessoal/DepartmentPersonalEmployeesAddPersonalData'
import { DepartmentPersonalEmployeesAddDocuments } from './pages/dept.Pessoal/DepartmentPersonalEmployeesAddDocuments'
import { DepartmentPersonalEmployeesAddAddressContact } from './pages/dept.Pessoal/DepartmentPersonalEmployeesAddAddressContact'
import { DepartmentPersonalEmployeesAddContractData } from './pages/dept.Pessoal/DepartmentPersonalEmployeesAddContractData'
import { DepartmentPersonalEmployeesAddOthers } from './pages/dept.Pessoal/DepartmentPersonalEmployeesAddOthers'

import { DepartmentPersonalBusinessListSeeData } from './pages/dept.Pessoal/DepartmentPersonalBusinessListSeeData'
import { DepartmentPersonalBusinessListEdit } from './pages/dept.Pessoal/DepartmentPersonalBusinessListEdit'
import { DepartmentPersonalBusinessAddCompany } from './pages/dept.Pessoal/DepartmentPersonalBusinessAddCompany'
import { DepartmentPersonalBusinessAddAddress } from './pages/dept.Pessoal/DepartmentPersonalBusinessAddAddress'
import { DepartmentPersonalBusinessAddResponsible } from './pages/dept.Pessoal/DepartmentPersonalBusinessAddResponsible'

import { DepartmentPersonnelPayment13th } from './pages/dept.Pessoal/DepartmentPersonnelPayment13th'
import { DepartmentPersonnelPaymentPaymentAdvance } from './pages/dept.Pessoal/DepartmentPersonnelPaymentPaymentAdvance'

import { DepartmentPersonalHolidaysRemovalLeave } from './pages/dept.Pessoal/DepartmentPersonalHolidaysRemovalLeave'
import { DepartmentPersonalHolidaysRemovalVacation } from './pages/dept.Pessoal/DepartmentPersonalHolidaysRemovalVacation'

import { PersonnelDepartmentTimeSheet } from './pages/dept.Pessoal/PersonnelDepartmentTimeSheet'
import { DepartmentPersonnelPointSheetControlPoint } from './pages/dept.Pessoal/DepartmentPersonnelPointSheetControlPoint'
import { DepartmentPersonnelPointSheetClosingPoint } from './pages/dept.Pessoal/DepartmentPersonnelPointSheetClosingPoint'
import { DepartmentPersonnelPointSheetImport } from './pages/dept.Pessoal/DepartmentPersonnelPointSheetImport'

import { DepartmentPersonnelSettingsAddDepartment } from './pages/dept.Pessoal/DepartmentPersonnelSettingsAddDepartment'
import { DepartmentPersonalSettingsAddPosition } from './pages/dept.Pessoal/DepartmentPersonalSettingsAddPosition'
import { DepartmentPersonalSettingsAddShift } from './pages/dept.Pessoal/DepartmentPersonalSettingsAddShift'
import { DepartmentPersonnelSettingsManageShifts } from './pages/dept.Pessoal/DepartmentPersonnelSettingsManageShifts'
import { DepartmentPersonnelSettingsAreasRisk } from './pages/dept.Pessoal/DepartmentPersonnelSettingsAreasRisk'
import { DepartmentPersonalSettingsUnion } from './pages/dept.Pessoal/DepartmentPersonalSettingsUnion'
import { DepartmentPersonalSettingsDocuments } from './pages/dept.Pessoal/DepartmentPersonalSettingsDocuments'
import { DepartmentPersonalSettingsReferences } from './pages/dept.Pessoal/DepartmentPersonalSettingsReferences'
import { DepartmentPersonnelSettingsExtraTime } from './pages/dept.Pessoal/DepartmentPersonnelSettingsExtraTime'

import { DrawnetMain } from './pages/Drawnet/DrawnetMain'
import { DrawnetViewNet } from './pages/Drawnet/DrawnetViewNet'
import { DrawnetDrawRedeDraw } from './pages/Drawnet/DrawnetDrawRedeDraw'
import { DrawnetDrawNetworkRegistrationCablesEquipment } from './pages/Drawnet/DrawnetDrawNetworkRegistrationCablesEquipment'
import { DrawnetDrawNetworkShapes } from './pages/Drawnet/DrawnetDrawNetworkShapes'

import { Stock } from './pages/estoque/Stock'
import { InventoryEntries } from './pages/estoque/InventoryEntries'
import { StockInventory } from './pages/estoque/StockInventory'
import { InventoryOutputsOperator } from './pages/estoque/InventoryOutputsOperator'
import { InventoryIssuesClient } from './pages/estoque/InventoryIssuesClient'
import { InventoryWarehouse } from './pages/estoque/InventoryWarehouse'
import { StockDefineSerials } from './pages/estoque/StockDefineSerials'
import { InventoryAllocateSerials } from './pages/estoque/InventoryAllocateSerials'
import { StockImportNF } from './pages/estoque/StockImportNF'

import { Financial } from './pages/financeiro/Financial'
import { FinancialBankInvoicesWin } from './pages/financeiro/FinancialBankInvoicesWin'
import { FinancialBankWinToday } from './pages/financeiro/FinancialBankWinToday'
import { FinancialBankOverdue } from './pages/financeiro/FinancialBankOverdue'
import { FinancialBankLiquids } from './pages/financeiro/FinancialBankLiquids'
import { FinancialBankSupportsPaid } from './pages/financeiro/FinancialBankSupportsPaid'
import { FinancialBankGenerateMass } from './pages/financeiro/FinancialBankGenerateMass'
import { FinancialBankDeleted } from './pages/financeiro/FinancialBankDeleted'
import { FinancialBankPrintMass } from './pages/financeiro/FinancialBankPrintMass'
import { FinancialBankOpenInvoice } from './pages/financeiro/FinancialBankOpenInvoice'
import { FinancialBankPayInvoice } from './pages/financeiro/FinancialBankPayInvoice'
import { FinancialBankListInvoices } from './pages/financeiro/FinancialBankListInvoices'
import { FinancialBankGenerateAll } from './pages/financeiro/FinancialBankGenerateAll'
import { FinancialBankGenerateSelected } from './pages/financeiro/FinancialBankGenerateSelected'
import { FinancialBankReturn } from './pages/financeiro/FinancialBankReturn'
import { FinancialBankArchive } from './pages/financeiro/FinancialBankArchive'

import { FinancialNFChooseRegister } from './pages/financeiro/FinancialNFChooseRegister'
import { FinancialNFNotesIssued } from './pages/financeiro/FinancialNFNotesIssued'
import { FinancialNFGenerateSelected } from './pages/financeiro/FinancialNFGenerateSelected'
import { FinancialNFGenerateAll } from './pages/financeiro/FinancialNFGenerateAll'
import { FinancialNFGenerateArchives } from './pages/financeiro/FinancialNFGenerateArchives'
import { FinancialNFFiles } from './pages/financeiro/FinancialNFFiles'
import { FinancialNFDebugLog } from './pages/financeiro/FinancialNFDebugLog'

import { FinancialAccountsPay } from './pages/financeiro/FinancialAccountsPay'
import { FinancialGerencianetInstallments } from './pages/financeiro/FinancialGerencianetInstallments'
import { AccountsPaySupplier } from './pages/financeiro/FinancialAccountsPaySupplier'

import { FinancialGerencianetTransactions } from './pages/financeiro/FinancialGerencianetTransactions'
import { FinancialGerencianetErrorTransactions } from './pages/financeiro/FinancialGerencianetErrorTransactions'
import { DrawnetDrawNetworkConfiguration } from './pages/Drawnet/DrawnetDrawNetworkConfiguration'
import { FinancialGerencianetDebugAnswer } from './pages/financeiro/FinancialGerencianetDebugAnswer'
import { FinancialGerencianetPrintMass } from './pages/financeiro/FinancialGerencianetPrintMass'
import { FinancialGerencianetSupportWithoutInvoice } from './pages/financeiro/FinancialGerencianetSupportWithoutInvoice'

import { FinancialWidePayInstallments } from './pages/financeiro/FinancialWidePayInstallments'
import { FinancialWidePayTransactions } from './pages/financeiro/FinancialWidePayTransactions'
import { FinancialWidePayErrorTransactions } from './pages/financeiro/FinancialWidePayErrorTransactions'
import { FinancialWidePayDebugAnswer } from './pages/financeiro/FinancialWidePayDebugAnswer'
import { FinancialWidePaySuportWithoutInvoice } from './pages/financeiro/FinancialWidePaySuportWithoutInvoice'

import { FinancialGalaxPayInstallments } from './pages/financeiro/FinancialGalaxPayInstallments'
import { FinancialGalaxPayCarnet } from './pages/financeiro/FinancialGalaxPayCarnet'
import { FinancialGalaxPayTransactions } from './pages/financeiro/FinancialGalaxPayTransactions'
import { FinancialGalaxPayErrorTransactions } from './pages/financeiro/FinancialGalaxPayErrorTransactions'
import { FinancialGalaxPayDebugAnswer } from './pages/financeiro/FinancialGalaxPayDebugAnswer'
import { FinancialGalaxPayPrintMass } from './pages/financeiro/FinancialGalaxPayPrintMass'
import { FinancialGalaxPaySupportWithoutInvoice } from './pages/financeiro/FinancialGalaxPaySupportWithoutInvoice'

import { FinancialF2BInstallments } from './pages/financeiro/FinancialF2BInstallments'
import { FinancialF2BCarnet } from './pages/financeiro/FinancialF2BCarnet'
import { FinancialF2BTransactions } from './pages/financeiro/FinancialF2BTransactions'
import { FinancialF2BErrorTransactions } from './pages/financeiro/FinancialF2BErrorTransactions'
import { FinancialF2BDebugAnswer } from './pages/financeiro/FinancialF2BDebugAnswer'
import { FinancialF2BSuporteWithoutInvoice } from './pages/financeiro/FinancialF2BSuporteWithoutInvoice'

import { FinancialBoletoFácilCarnetInstallments } from './pages/financeiro/FinancialBoletoFácilCarnetInstallments'
import { FinancialBoletoFácilTransactions } from './pages/financeiro/FinancialBoletoFácilTransactions'
import { FinancialBoletoFácilErrorTransactions } from './pages/financeiro/FinancialBoletoFácilErrorTransactions'
import { FinancialBoletoFácilDebugAnswer } from './pages/financeiro/FinancialBoletoFácilDebugAnswer'
import { FinancialBoletoFácilSupportWithoutInvoice } from './pages/financeiro/FinancialBoletoFácilSupportWithoutInvoice'

import { FinancialPulsarPayInstallment } from './pages/financeiro/FinancialPulsarPayInstallment'
import { FinancialPulsarPayCarnet } from './pages/financeiro/FinancialPulsarPayCarnet'
import { FinancialPulsarPayTransactions } from './pages/financeiro/FinancialPulsarPayTransactions'
import { FinancialPulsarPayErrorTransactions } from './pages/financeiro/FinancialPulsarPayErrorTransactions'
import { FinancialPulsarDebugAnswer } from './pages/financeiro/FinancialPulsarDebugAnswer'
import { FinancialPulsarSupportWithoutInvoice } from './pages/financeiro/FinancialPulsarSupportWithoutInvoice'

/* <----------------------------------------------------HELP DESK----------------------------------------------------------------------------> */

import { HelpDesk } from './pages/help-desk/HelpDesk'

import { HelpDeskSummary } from './pages/help-desk/HelpDeskSummary'
import { HelpDeskMySupports } from './pages/help-desk/HelpDeskMySupports'
import { HelpDeskClosedSupports } from './pages/help-desk/HelpDeskClosedSupports'
import { HelpDeskPanel } from './pages/help-desk/HelpDeskPanel'
import { HelpDeskSupportsSystem } from './pages/help-desk/HelpDeskSupportsSystem'
import { HelpDeskMonitoring } from './pages/help-desk/HelpDeskMonitoring'

import { HelpDeskCallCenterOpenSupport } from './pages/help-desk/HelpDeskCallCenterOpenSupport'
import { HelpDeskCallCenterDataClient } from './pages/help-desk/HelpDeskCallCenterDataClient'
import { HelpDeskCallCenterEditClient } from './pages/help-desk/HelpDeskCallCenterEditClient'
import { HelpDeskCallCenterViewAttachments } from './pages/help-desk/HelpDeskCallCenterViewAttachments'
import { HelpDeskCallCenter } from './pages/help-desk/HelpDeskCallCenter'
import { HelpDeskCallCenterLogins } from './pages/help-desk/HelpDeskCallCenterLogins'
import { HelpDeskCallCenterContracts } from './pages/help-desk/HelpDeskCallCenterContracts'
import { HelpDeskCallCenterAppliedMaterials } from './pages/help-desk/HelpDeskCallCenterAppliedMaterials'
import { HelpDeskCallCenterDashboard } from './pages/help-desk/HelpDeskCallCenterDashboard'
import { HelpDeskCallCenterNewCustomer } from './pages/help-desk/HelpDeskCallCenterNewCustomer'
import { HelpDeskCallCenterHistoryFinancialAll } from './pages/help-desk/HelpDeskCallCenterHistoryFinancialAll'
import { HelpDeskCallCenterHistorySupportAll } from './pages/help-desk/HelpDeskCallCenterHistorySupportAll'

import { HelpDeskOrderService } from './pages/help-desk/HelpDeskOrderService'
import { HelpDeskSupervisionField } from './pages/help-desk/HelpDeskSupervisionField'

/* <----------------------------------------------------MATERIAIS----------------------------------------------------------------------------> */

import { Materials } from './pages/materiais/Materials'

import './styles/global.scss'


function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={HomePage} />
      <Route path="/teste" exact component={TestPage} />

      <Route path="/politica-de-suporte" exact component={PoliticaSuporte} />
      <Route path="/requisitos-instalacao" exact component={RequisitosInstalação} />

      {/* <-------------------------------------------------------CLIENTE-------------------------------------------------------------------------------> */}


      <Route path="/cliente" exact component={Client} />

      <Route path="/cliente/adicionar" exact component={AddClient} />
      <Route path="/cliente/adicionar/dados" exact component={AddDataClient} />
      <Route path="/cliente/adicionar/endereco" exact component={AddAdressClient} />
      <Route path="/cliente/adicionar/contato" exact component={AddContactCliente} />
      <Route path="/cliente/adicionar/automacao" exact component={AddAutomationClient} />

      <Route path="/cliente/menu-mouse" exact component={ClientMouseMenu} />
      <Route path="/cliente/menu-mouse/login" exact component={ClientMenuMouseLogin} />
      <Route path="/cliente/menu-mouse/login/adicionar" exact component={ClienteMouseMenuLoginAdd} />
      <Route path="/cliente/menu-mouse/login/fibra" exact component={ClienteMouseMenuLoginFiber} />
      <Route path="/cliente/menu-mouse/login/extrato" exact component={ClientMouseMenuLoginExtract} />

      <Route path="/cliente/menu-mouse/NF21" exact component={ClientMouseMenuNF21} />

      <Route path="/cliente/menu-mouse/visualizar-cliente" exact component={ClientMouseMenuViewClient} />
      <Route path="/cliente/menu-mouse/visualizar-mapa" exact component={ClienteMouseMenuViewMap} />

      <Route path="/cliente/menu-mouse/faturas/abertas" exact component={ClientMouseMenuInvoicesOpen} />
      <Route path="/cliente/menu-mouse/faturas/selecionadas" exact component={ClientMouseMenuInvoicesSelect} />
      <Route path="/cliente/menu-mouse/faturas/visualizar" exact component={ClientMouseMenuInvoicesView} />
      <Route path="/cliente/menu-mouse/faturas/impressao" exact component={ClientMouseMenuInvoicesPrint} />
      <Route path="/cliente/menu-mouse/faturas/imprimir" exact component={ClientMouseMenuInvoicesToPrint} />
      <Route path="/cliente/menu-mouse/faturas/sms" exact component={ClientMouseMenuInvoicesSMS} />
      <Route path="/cliente/menu-mouse/faturas/email" exact component={ClientMouseMenuInvoicesEmail} />
      <Route path="/cliente/menu-mouse/faturas/deletar-selecionadas" exact component={ClientMouseMenuInvoicesDeletSelect} />
      <Route path="/cliente/menu-mouse/faturas/imprimir-selecionadas" exact component={ClientMouseMenuInvoicesPrintSelect} />
      <Route path="/cliente/menu-mouse/faturas/adicionar" exact component={ClientMouseMenuInvoicesAdd} />
      <Route path="/cliente/menu-mouse/faturas/selecionar-todas" exact component={ClientMouseMenuInvoicesSelectAll} />
      <Route path="/cliente/menu-mouse/faturas/desmarcar-todas" exact component={ClientMouseMenuInvoicesDeselectAll} />
      <Route path="/cliente/menu-mouse/faturas/baixa-retorno" exact component={ClientMouseMenuInvoicesDowloadReturn} />
      <Route path="/cliente/menu-mouse/faturas/baixa-manual" exact component={ClientMouseMenuInvoicesDowloadManual} />
      <Route path="/cliente/menu-mouse/faturas/baixa-cartao-credito" exact component={ClientMouseMenuInvoicesDowloadCreditCard} />
      <Route path="/cliente/menu-mouse/faturas/baixa-promessa-pagamento" exact component={ClientMouseMenuInvoicesPromisePayment} />
      <Route path="/cliente/menu-mouse/faturas/deletadas" exact component={ClientMouseMenuInvoicesDelet} />
      <Route path="/cliente/menu-mouse/faturas/todos" exact component={ClientMouseMenuInvoicesAll} />

      <Route path="/cliente/menu-mouse/faturas/menu" exact component={ClientMouseMenuInvoicesMenu} />
      <Route path="/cliente/menu-mouse/faturas/menu/editar" exact component={ClientMouseMenuInvoicesMenuEdit} />
      <Route path="/cliente/menu-mouse/faturas/menu/deletar" exact component={ClientMouseMenuInvoicesMenuDelet} />
      <Route path="/cliente/menu-mouse/faturas/menu/desconto-conexao" exact component={ClientMouseMenuInvoicesMenuDiscountConnection} />
      <Route path="/cliente/menu-mouse/faturas/menu/desfazer-pagamento" exact component={ClientMouseMenuInvoicesMenuUndoPayment} />
      <Route path="/cliente/menu-mouse/faturas/menu/desfazer-remessa" exact component={ClientMouseMenuInvoicesMenuUndoShipment} />
      <Route path="/cliente/menu-mouse/faturas/menu/mudar-baixa-manual" exact component={ClientMouseMenuInvoicesMenuChangeManualDownload} />

      <Route path="/cliente/menu-mouse/chamados-abertos" exact component={ClientMouseMenuOpenCalls} />
      <Route path="/cliente/menu-mouse/chamados-fechados" exact component={ClientMouseMenuCloseCalls} />
      <Route path="/cliente/menu-mouse/chamados-todos" exact component={ClientMouseMenuAllCalls} />

      <Route path="/cliente/menu-mouse/materiais-aplicados-todos" exact component={ClientMouseMenuMaterialsAppliedAll} />
      <Route path="/cliente/menu-mouse/materiais-aplicados-abertos" exact component={ClientMouseMenuMaterialsAppliedOpen} />
      <Route path="/cliente/menu-mouse/materiais-aplicados-discordou" exact component={ClientMouseMenuMaterialsAppliedAllDisagreed} />

      <Route path="/cliente/menu-mouse/editar-dados-cliente" exact component={ClientMouseMenuEditDataClient} />
      <Route path="/cliente/menu-mouse/editar-endereco" exact component={ClientMouseMenuEditAdress} />
      <Route path="/cliente/menu-mouse/editar-contrato" exact component={ClientMouseMenuEditContract} />
      <Route path="/cliente/menu-mouse/editar-automacao" exact component={ClientMouseMenuEditAutomation} />

      {/* <-------------------------------------------------------CONFIGURAÇÕES-------------------------------------------------------------------------------> */}

      <Route path="/configuracoes" exact component={Config} />
      <Route path="/configuracoes/server/google-maps-api" exact component={ConfigServerMapsAPI} />
      <Route path="/configuracoes/server/definicoes-padrao" exact component={ConfigServerSettingsDefault} />
      <Route path="/configuracoes/server/painel-cliente" exact component={ConfigServerPanelClient} />
      <Route path="/configuracoes/server/sici" exact component={ConfigServerSICI} />
      <Route path="/configuracoes/server/procedimentos" exact component={ConfigServerProcedures} />
      <Route path="/configuracoes/server/scripts" exact component={ConfigServerScripts} />
      <Route path="/configuracoes/server/zabbix" exact component={ConfigServerZabbix} />
      <Route path="/configuracoes/server/pesquisa" exact component={ConfigServerSearch} />
      <Route path="/configuracoes/server/bematech" exact component={ConfigServerBematech} />
      <Route path="/configuracoes/server/fatura-automatica" exact component={ConfigServerInvoiceAutomatic} />

      <Route path="/configuracoes/server/help-desk/tipo-servico" exact component={ConfigServerHelpDeskServiceType} />
      <Route path="/configuracoes/server/help-desk/motivo-fechamento" exact component={ConfigServerHelpDeskReasonClosing} />
      <Route path="/configuracoes/server/help-desk/grupos-operadores" exact component={ConfigServerHelpDeskGroupsOperators} />

      <Route path="/configuracoes/perfil-acesso" exact component={ConfigProfileAccess} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/login" exact component={ConfigProfileAccessNewUserLogin} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/adiministrador-cliente" exact component={ConfigProfileAccessNewUserAdministradorCliente} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/financeiro" exact component={ConfigProfileAccessNewUserInvoices} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/help-desk" exact component={ConfigProfileAccessNewUserHelpDesk} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/estoque" exact component={ConfigProfileAccessNewUserStock} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/rede" exact component={ConfigProfileAccessNewUserNetwork} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/contrato" exact component={ConfigProfileAccessNewUserContract} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/relatorios" exact component={ConfigProfileAccessNewUserReports} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/radius" exact component={ConfigProfileAccessNewUserRadius} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/departamento-pessoal" exact component={ConfigProfileAccessNewUserDepartmentPersonal} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/e-social" exact component={ConfigProfileAccessNewUserSocial} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/web-sms" exact component={ConfigProfileAccessNewUserWebSMS} />
      <Route path="/configuracoes/perfil-acesso/novo-usuario/web-mail" exact component={ConfigProfileAccessNewUserWebMail} />

      <Route path="/configuracoes/empressas-contas" exact component={ConfigCompaniesAccounts} />
      <Route path="/configuracoes/empressas-contas/empressa" exact component={ConfigCompaniesAccountsCompany} />
      <Route path="/configuracoes/empressas-contas/dados-bancarios" exact component={ConfigCompaniesAccountsDataBank} />

      <Route path="/configuracoes/aplicativo/tecnico" exact component={ConfigApplicationTechnical} />
      <Route path="/configuracoes/aplicativo/cliente" exact component={ConfigApplicationClient} />
      <Route path="/configuracoes/aplicativo/aparelhos" exact component={ConfigApplicationAppliances} />
      <Route path="/configuracoes/aplicativo/imagens" exact component={ConfigApplicationImages} />

      <Route path="/configuracoes/api" exact component={ConfigApi} />

      <Route path="/configuracoes/grupos-radius" exact component={ConfigRadiusGroups} />
      <Route path="/configuracoes/grupos-radius/parametros" exact component={ConfigRadiusGroupsParameters} />
      <Route path="/configuracoes/grupos-radius/parametros/cliente-grupo" exact component={ConfigRadiusGroupsParametersClienteGroup} />
      <Route path="/configuracoes/grupos-radius/parametros/editar-grupo" exact component={ConfigRadiusGroupsParametersEditGroup} />
      <Route path="/configuracoes/grupos-radius/parametros/deletar-grupo" exact component={ConfigRadiusGroupsParametersDeleteGroup} />
      <Route path="/configuracoes/grupos-radius/configuracoes" exact component={ConfigRadiusGroupsConfiguration} />
      <Route path="/configuracoes/grupos-radius/link-full" exact component={ConfigRadiusGroupsLinkFull} />
      <Route path="/configuracoes/grupos-radius/dominio-radius" exact component={ConfigRadiusGroupsDomain} />
      <Route path="/configuracoes/grupos-radius/pool-radius" exact component={ConfigRadiusGroupsPoolRadius} />
      <Route path="/configuracoes/grupos-radius/b-rass" exact component={ConfigRadiusGroupsBRass} />
      <Route path="/configuracoes/grupos-radius/mikrotik" exact component={ConfigRadiusGroupsMikrotikExport} />

      <Route path="/configuracoes/contratos" exact component={ConfigContracts} />
      <Route path="/configuracoes/contratos/existente" exact component={ConfigContractsExisting} />
      <Route path="/configuracoes/contratos/novo" exact component={ConfigContractsNew} />
      <Route path="/configuracoes/contratos/opcoes" exact component={ConfigContractsOptions} />

      <Route path="/configuracoes/ordem-servico" exact component={ConfigOrderService} />
      <Route path="/configuracoes/ordem-servico/existente" exact component={ConfigOrderServiceExisting} />
      <Route path="/configuracoes/ordem-servico/nova" exact component={ConfigOrderServiceNew} />
      <Route path="/configuracoes/ordem-servico/opcoes" exact component={ConfigOrderServiceOptions} />

      <Route path="/configuracoes/backup" exact component={ConfigBackup} />
      <Route path="/configuracoes/backup/criar" exact component={ConfigBackupCreate} />
      <Route path="/configuracoes/backup/restauar" exact component={ConfigBackupRestore} />
      <Route path="/configuracoes/backup/download-servidor" exact component={ConfigBackupDownloadServer} />
      <Route path="/configuracoes/backup/upload-servidor" exact component={ConfigBackupUploadServer} />
      <Route path="/configuracoes/backup/deletar" exact component={ConfigBackupDelete} />
      <Route path="/configuracoes/backup/enviar" exact component={ConfigBackupSend} />
      <Route path="/configuracoes/backup/externo" exact component={ConfigBackupExternal} />

      <Route path="/configuracoes/sms" exact component={ConfigSMS} />

      <Route path="/configuracoes/smtp" exact component={ConfigSMTP} />

      <Route path="/configuracoes/telegram" exact component={ConfigTelegram} />

      <Route path="/configuracoes/whatsapp" exact component={ConfigWhatsapp} />

      <Route path="/configuracoes/plano-contas" exact component={ConfigPlanAccounts} />

      <Route path="/configuracoes/gateway-pagamento/gerencianet" exact component={ConfigGatewayPaymentGerencianet} />
      <Route path="/configuracoes/gateway-pagamento/wide-pay" exact component={ConfigGatewayPaymentWidePay} />
      <Route path="/configuracoes/gateway-pagamento/galaxpay" exact component={ConfigGatewayPaymentGalaxpay} />
      <Route path="/configuracoes/gateway-pagamento/f2b" exact component={ConfigGatewayPaymentF2B} />
      <Route path="/configuracoes/gateway-pagamento/boleto-facil" exact component={ConfigGatewayPaymentBoletoEasy} />
      <Route path="/configuracoes/gateway-pagamento/pulsar-pay" exact component={ConfigGatewayPaymentPulsarPay} />
      <Route path="/configuracoes/gateway-pagamento/pag-segurp" exact component={ConfigGatewayPagamentoPagSeguro} />
      <Route path="/configuracoes/gateway-pagamento/cielo" exact component={ConfigGatewayPaymentCielo} />

      {/* <----------------------------------------------------DEPARTAMENTO PESSOAL----------------------------------------------------------------------------> */}

      <Route path="/dpt-pessoal" exact component={DepartmentPersonal} />
      <Route path="/dpt-pessoal/colaboradores/listar" exact component={DepartmentPersonalEmployeesList} />
      <Route path="/dpt-pessoal/colaboradores/listar/upload-arquivo" exact component={DepartmentPersonalEmployeesListUploadArchive} />
      <Route path="/dpt-pessoal/colaboradores/listar/ver-dados" exact component={DepartmentPersonalEmployeesListSeeData} />
      <Route path="/dpt-pessoal/colaboradores/listar/editar" exact component={DepartmentPersonalEmployeesListEdit} />
      <Route path="/dpt-pessoal/colaboradores/listar/dependencias" exact component={DepartmentPersonalEmployeesListDependents} />
      <Route path="/dpt-pessoal/colaboradores/listar/beneficios" exact component={DepartmentPersonalEmployeesListBenefits} />


      <Route path="/dpt-pessoal/colaboradores/adicionar/dados-pessoais" exact component={DepartmentPersonalEmployeesAddPersonalData} />
      <Route path="/dpt-pessoal/colaboradores/adicionar/documentos" exact component={DepartmentPersonalEmployeesAddDocuments} />
      <Route path="/dpt-pessoal/colaboradores/adicionar/endereco-contato" exact component={DepartmentPersonalEmployeesAddAddressContact} />
      <Route path="/dpt-pessoal/colaboradores/adicionar/dados-contratuais" exact component={DepartmentPersonalEmployeesAddContractData} />
      <Route path="/dpt-pessoal/colaboradores/adicionar/outros" exact component={DepartmentPersonalEmployeesAddOthers} />

      <Route path="/dpt-pessoal/empressa/listar/ver-dados" exact component={DepartmentPersonalBusinessListSeeData} />
      <Route path="/dpt-pessoal/empressa/listar/editar" exact component={DepartmentPersonalBusinessListEdit} />

      <Route path="/dpt-pessoal/empressa/adicionar/empressa" exact component={DepartmentPersonalBusinessAddCompany} />
      <Route path="/dpt-pessoal/empressa/adicionar/endereco" exact component={DepartmentPersonalBusinessAddAddress} />
      <Route path="/dpt-pessoal/empressa/adicionar/responsavel" exact component={DepartmentPersonalBusinessAddResponsible} />

      <Route path="/dpt-pessoal/folha-pagamento/13o" exact component={DepartmentPersonnelPayment13th} />
      <Route path="/dpt-pessoal/folha-pagamento/adiantamento" exact component={DepartmentPersonnelPaymentPaymentAdvance} />

      <Route path="/dpt-pessoal/ferias-afastamento/afastamento" exact component={DepartmentPersonalHolidaysRemovalLeave} />
      <Route path="/dpt-pessoal/ferias-afastamento/ferias" exact component={DepartmentPersonalHolidaysRemovalVacation} />

      <Route path="/dpt-pessoal/folha-ponto/folha-ponto" exact component={PersonnelDepartmentTimeSheet} />
      <Route path="/dpt-pessoal/folha-ponto/controle-ponto" exact component={DepartmentPersonnelPointSheetControlPoint} />
      <Route path="/dpt-pessoal/folha-ponto/fechamento-ponto" exact component={DepartmentPersonnelPointSheetClosingPoint} />
      <Route path="/dpt-pessoal/folha-ponto/importar-ponto" exact component={DepartmentPersonnelPointSheetImport} />

      <Route path="/dpt-pessoal/configuracoes/adicionar-departamento" exact component={DepartmentPersonnelSettingsAddDepartment} />
      <Route path="/dpt-pessoal/configuracoes/adicionar-cargo" exact component={DepartmentPersonalSettingsAddPosition} />
      <Route path="/dpt-pessoal/configuracoes/adicionar-turno" exact component={DepartmentPersonalSettingsAddShift} />
      <Route path="/dpt-pessoal/configuracoes/gerenciar-turno" exact component={DepartmentPersonnelSettingsManageShifts} />
      <Route path="/dpt-pessoal/configuracoes/areas-risco" exact component={DepartmentPersonnelSettingsAreasRisk} />
      <Route path="/dpt-pessoal/configuracoes/sindicato" exact component={DepartmentPersonalSettingsUnion} />
      <Route path="/dpt-pessoal/configuracoes/documentos" exact component={DepartmentPersonalSettingsDocuments} />
      <Route path="/dpt-pessoal/configuracoes/referencias" exact component={DepartmentPersonalSettingsReferences} />
      <Route path="/dpt-pessoal/configuracoes/hora-extra" exact component={DepartmentPersonnelSettingsExtraTime} />

      {/* <---------------------------------------------------------DRAWNET-------------------------------------------------------------------------------> */}

      <Route path="/drawnet" exact component={DrawnetMain} />
      <Route path="/drawnet/visualizar-rede" exact component={DrawnetViewNet} />
      <Route path="/drawnet/desenhar-rede/desenhar" exact component={DrawnetDrawRedeDraw} />
      <Route path="/drawnet/desenhar-rede/cadastro-cabos-equipamentos" exact component={DrawnetDrawNetworkRegistrationCablesEquipment} />
      <Route path="/drawnet/desenhar-rede/formas" exact component={DrawnetDrawNetworkShapes} />
      <Route path="/drawnet/desenhar-rede/configuracoes" exact component={DrawnetDrawNetworkConfiguration} />

      {/* <---------------------------------------------------------ESTOQUE-------------------------------------------------------------------------------> */}

      <Route path="/estoque" exact component={Stock} />
      <Route path="/estoque/entradas" exact component={InventoryEntries} />
      <Route path="/estoque/inventario" exact component={StockInventory} />
      <Route path="/estoque/saida-operador" exact component={InventoryOutputsOperator} />
      <Route path="/estoque/saida-cliente" exact component={InventoryIssuesClient} />
      <Route path="/estoque/almoxarifado" exact component={InventoryWarehouse} />
      <Route path="/estoque/definir-seriais" exact component={StockDefineSerials} />
      <Route path="/estoque/alocar-seriais" exact component={InventoryAllocateSerials} />
      <Route path="/estoque/importar-nf" exact component={StockImportNF} />

      {/* <---------------------------------------------------------FINANCEIRO-------------------------------------------------------------------------------> */}

      <Route path="/financeiro" exact component={Financial} />
      <Route path="/financeiro/banco/faturas/vencer" exact component={FinancialBankInvoicesWin} />
      <Route path="/financeiro/banco/faturas/vencer-hoje" exact component={FinancialBankWinToday} />
      <Route path="/financeiro/banco/faturas/vencidas" exact component={FinancialBankOverdue} />
      <Route path="/financeiro/banco/faturas/liquidas" exact component={FinancialBankLiquids} />
      <Route path="/financeiro/banco/faturas/suportes-pagos" exact component={FinancialBankSupportsPaid} />
      <Route path="/financeiro/banco/faturas/gerar-massa" exact component={FinancialBankGenerateMass} />
      <Route path="/financeiro/banco/faturas/imprimir-massa" exact component={FinancialBankPrintMass} />
      <Route path="/financeiro/banco/faturas/deletadas" exact component={FinancialBankDeleted} />
      <Route path="/financeiro/banco/faturas/abrir-fatura" exact component={FinancialBankOpenInvoice} />
      <Route path="/financeiro/banco/faturas/pagar-fatura" exact component={FinancialBankPayInvoice} />

      <Route path="/financeiro/banco/remessas/listar-fatura" exact component={FinancialBankListInvoices} />
      <Route path="/financeiro/banco/remessas/gerar-todos" exact component={FinancialBankGenerateAll} />
      <Route path="/financeiro/banco/remessas/gerar-selecionados" exact component={FinancialBankGenerateSelected} />
      <Route path="/financeiro/banco/remessas/arquivo" exact component={FinancialBankArchive} />

      <Route path="/financeiro/banco/retornar" exact component={FinancialBankReturn} />

      <Route path="/financeiro/nf-21/escolher-registro" exact component={FinancialNFChooseRegister} />
      <Route path="/financeiro/nf-21/notas-emitidas" exact component={FinancialNFNotesIssued} />
      <Route path="/financeiro/nf-21/gerar-selecionadas" exact component={FinancialNFGenerateSelected} />
      <Route path="/financeiro/nf-21/gerar-todas" exact component={FinancialNFGenerateAll} />
      <Route path="/financeiro/nf-21/gerar-arquivos" exact component={FinancialNFGenerateArchives} />
      <Route path="/financeiro/nf-21/arquivos" exact component={FinancialNFFiles} />
      <Route path="/financeiro/nf-21/depurar-logs" exact component={FinancialNFDebugLog} />

      <Route path="/financeiro/contas-pagar/contas-pagar" exact component={FinancialAccountsPay} />
      <Route path="/financeiro/contas-pagar/fornecedor" exact component={AccountsPaySupplier} />

      <Route path="/financeiro/gerencianet/carnes-parcelas" exact component={FinancialGerencianetInstallments} />
      <Route path="/financeiro/gerencianet/transacoes" exact component={FinancialGerencianetTransactions} />
      <Route path="/financeiro/gerencianet/erro-transacoes" exact component={FinancialGerencianetErrorTransactions} />
      <Route path="/financeiro/gerencianet/debug-resposta" exact component={FinancialGerencianetDebugAnswer} />
      <Route path="/financeiro/gerencianet/imprimir-massa" exact component={FinancialGerencianetPrintMass} />
      <Route path="/financeiro/gerencianet/suporte-sem-fatura" exact component={FinancialGerencianetSupportWithoutInvoice} />

      <Route path="/financeiro/wide-pay/carnes-parcelas" exact component={FinancialWidePayInstallments} />
      <Route path="/financeiro/wide-pay/transacoes" exact component={FinancialWidePayTransactions} />
      <Route path="/financeiro/wide-pay/erro-transacoes" exact component={FinancialWidePayErrorTransactions} />
      <Route path="/financeiro/wide-pay/debug-resposta" exact component={FinancialWidePayDebugAnswer} />
      <Route path="/financeiro/wide-pay/suporte-sem-fatura" exact component={FinancialWidePaySuportWithoutInvoice} />

      <Route path="/financeiro/galaxy-pay/parcelas" exact component={FinancialGalaxPayInstallments} />
      <Route path="/financeiro/galaxy-pay/carnes" exact component={FinancialGalaxPayCarnet} />
      <Route path="/financeiro/galaxy-pay/transacoes" exact component={FinancialGalaxPayTransactions} />
      <Route path="/financeiro/galaxy-pay/erro-transacoes" exact component={FinancialGalaxPayErrorTransactions} />
      <Route path="/financeiro/galaxy-pay/debug-resposta" exact component={FinancialGalaxPayDebugAnswer} />
      <Route path="/financeiro/galaxy-pay/imprimir-massas" exact component={FinancialGalaxPayPrintMass} />
      <Route path="/financeiro/galaxy-pay/suporte-sem-fatura" exact component={FinancialGalaxPaySupportWithoutInvoice} />

      <Route path="/financeiro/F2B/parcelas" exact component={FinancialF2BInstallments} />
      <Route path="/financeiro/F2B/carnes" exact component={FinancialF2BCarnet} />
      <Route path="/financeiro/F2B/transacoes" exact component={FinancialF2BTransactions} />
      <Route path="/financeiro/F2B/erro-transacoes" exact component={FinancialF2BErrorTransactions} />
      <Route path="/financeiro/F2B/debug-resposta" exact component={FinancialF2BDebugAnswer} />
      <Route path="/financeiro/F2B/suporte-sem-fatura" exact component={FinancialF2BSuporteWithoutInvoice} />

      <Route path="/financeiro/boleto-facil/carnes-parcelas" exact component={FinancialBoletoFácilCarnetInstallments} />
      <Route path="/financeiro/boleto-facil/transacoes" exact component={FinancialBoletoFácilTransactions} />
      <Route path="/financeiro/boleto-facil/erro-transacoes" exact component={FinancialBoletoFácilErrorTransactions} />
      <Route path="/financeiro/boleto-facil/debug-resposta" exact component={FinancialBoletoFácilDebugAnswer} />
      <Route path="/financeiro/boleto-facil/suporte-sem-fatura" exact component={FinancialBoletoFácilSupportWithoutInvoice} />

      <Route path="/financeiro/pulsar-pay/parcelas" exact component={FinancialPulsarPayInstallment} />
      <Route path="/financeiro/pulsar-pay/carnes" exact component={FinancialPulsarPayCarnet} />
      <Route path="/financeiro/pulsar-pay/transacoes" exact component={FinancialPulsarPayTransactions} />
      <Route path="/financeiro/pulsar-pay/erro-transacoes" exact component={FinancialPulsarPayErrorTransactions} />
      <Route path="/financeiro/pulsar-pay/debug-resposta" exact component={FinancialPulsarDebugAnswer} />
      <Route path="/financeiro/pulsar-pay/suporte-sem-fatura" exact component={FinancialPulsarSupportWithoutInvoice} />

      {/* <----------------------------------------------------HELP DESK----------------------------------------------------------------------------> */}

      <Route path="/help-desk/" exact component={HelpDesk} />
      <Route path="/help-desk/resumo" exact component={HelpDeskSummary} />
      <Route path="/help-desk/meus-suportes" exact component={HelpDeskMySupports} />
      <Route path="/help-desk/suportes-fechados" exact component={HelpDeskClosedSupports} />
      <Route path="/help-desk/painel" exact component={HelpDeskPanel} />
      <Route path="/help-desk/suporte-sistema" exact component={HelpDeskSupportsSystem} />
      <Route path="/help-desk/monitoramento" exact component={HelpDeskMonitoring} />

      <Route path="/help-desk/call-center" exact component={HelpDeskCallCenter} />
      <Route path="/help-desk/call-center/abrir-suporte" exact component={HelpDeskCallCenterOpenSupport} />
      <Route path="/help-desk/call-center/dados-cliente" exact component={HelpDeskCallCenterDataClient} />
      <Route path="/help-desk/call-center/editar-cliente" exact component={HelpDeskCallCenterEditClient} />
      <Route path="/help-desk/call-center/ver-anexos" exact component={HelpDeskCallCenterViewAttachments} />
      <Route path="/help-desk/call-center/login" exact component={HelpDeskCallCenterLogins} />
      <Route path="/help-desk/call-center/contratos" exact component={HelpDeskCallCenterContracts} />
      <Route path="/help-desk/call-center/materiais-aplicados" exact component={HelpDeskCallCenterAppliedMaterials} />
      <Route path="/help-desk/call-center/dashboard" exact component={HelpDeskCallCenterDashboard} />
      <Route path="/help-desk/call-center/novo-cliente" exact component={HelpDeskCallCenterNewCustomer} />
      <Route path="/help-desk/call-center/historico-financeiro-todos" exact component={HelpDeskCallCenterHistoryFinancialAll} />
      <Route path="/help-desk/call-center/historico-suporte-todos" exact component={HelpDeskCallCenterHistorySupportAll} />

      <Route path="/help-desk/ordem-servico" exact component={HelpDeskOrderService} />
      <Route path="/help-desk/supervicao-campo" exact component={HelpDeskSupervisionField} />

 {/* <----------------------------------------------------MATERIAIS----------------------------------------------------------------------------> */}

      <Route path="/materiais" exact component={Materials} />

 {/* <----------------------------------------------------MEU-CAIXA----------------------------------------------------------------------------> */}

 <Route path="/materiais" exact component={Materials} />

    </BrowserRouter>
  );
}

export default App;