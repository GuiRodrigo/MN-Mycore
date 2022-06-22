import { Link } from "react-router-dom";
import { useState } from "react";
import { BanksBranch } from "./BanksBranch";
import { NF21Branch } from "./NF21Branch";
import { BillsToPayBranch } from "./BillsToPayBranch";
import { GerencianetBranch } from "./GerencianetBranch";
import { WidePayBranch } from "./WidePayBranch";
import { GalaxPayBranch } from "./GalaxPayBranch";
import { F2BBranch } from "./F2BBranch";
import { BoletoFácilBranch } from "./BoletoFácilBranch";
import { PulsarPayBranch } from "./PulsarPayBranch";

export function FinancialBranch() {

    const [isBanksBranchOpen, setBanksBranchOpen] = useState(false)
    const [isNF21BranchOpen, setNF21BranchOpen] = useState(false)
    const [isBillsToPayBranchOpen, setBillsToPayBranchOpen] = useState(false)
    const [isGerencianetBranchOpen, setGerencianetBranchOpen] = useState(false)
    const [isWidePayBranchOpen, setWidePayBranchOpen] = useState(false)
    const [isGalaxPayBranchOpen, setGalaxPayBranchOpen] = useState(false)
    const [isF2BBranchOpen, setF2BBranchOpen] = useState(false)
    const [isBoletoFácilBranchOpen, setBoletoFácilBranchOpen] = useState(false)
    const [isPulsarPayBranchOpen, setPulsarPayBranchOpen] = useState(false)

    return (
        <ul>
            <li> <input type="checkbox" name="" id="BanksBranch" onClick={() => { setBanksBranchOpen(!isBanksBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="BanksBranch"></label>
                    <Link className="withDropdown" to="#"> Bancos </Link>
                </div>
                {isBanksBranchOpen ?
                    <BanksBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="NF21Branch" onClick={() => { setNF21BranchOpen(!isNF21BranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="NF21Branch"></label>
                    <Link className="withDropdown" to="#"> NF 21 </Link>
                </div>

                {isNF21BranchOpen ?
                    <NF21Branch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="BillsToPayBranch" onClick={() => { setBillsToPayBranchOpen(!isBillsToPayBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="BillsToPayBranch"></label>
                    <Link className="withDropdown" to="#"> Contas a Pagar </Link>
                </div>

                {isBillsToPayBranchOpen ?
                    <BillsToPayBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="GerencianetBranch" onClick={() => { setGerencianetBranchOpen(!isGerencianetBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="GerencianetBranch"></label>
                    <Link className="withDropdown" to="#"> Gerencianet </Link>
                </div>
                {isGerencianetBranchOpen ?
                    <GerencianetBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="WidePayBranch" onClick={() => { setWidePayBranchOpen(!isWidePayBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="WidePayBranch"></label>
                    <Link className="withDropdown" to="#">  Wide Pay</Link>
                </div>

                {isWidePayBranchOpen ?
                    <WidePayBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="GalaxPayBranch" onClick={() => { setGalaxPayBranchOpen(!isGalaxPayBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="GalaxPayBranch"></label>
                    <Link className="withDropdown" to="#"> Galax Pay </Link>
                </div>

                {isGalaxPayBranchOpen ?
                    <GalaxPayBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="F2BBranch" onClick={() => { setF2BBranchOpen(!isF2BBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="F2BBranch"></label>
                    <Link className="withDropdown" to="#"> F2B </Link>
                </div>
                {isF2BBranchOpen ?
                    <F2BBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="BoletoFácilBranch" onClick={() => { setBoletoFácilBranchOpen(!isBoletoFácilBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="BoletoFácilBranch"></label>
                    <Link className="withDropdown" to="#"> Boleto fácil </Link>
                </div>

                {isBoletoFácilBranchOpen ?
                    <BoletoFácilBranch />
                    : null}
            </li>
            <li> <input type="checkbox" name="" id="PulsarPayBranch" onClick={() => { setPulsarPayBranchOpen(!isPulsarPayBranchOpen) }} />
                <div className="withLabel"  >
                    <label htmlFor="PulsarPayBranch"></label>
                    <Link className="withDropdown" to="#"> Pulsar Pay </Link>
                </div>

                {isPulsarPayBranchOpen ?
                    <PulsarPayBranch />
                    : null}
            </li>
        </ul>
    )
}