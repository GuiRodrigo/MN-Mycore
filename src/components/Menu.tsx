import { Link } from 'react-router-dom'
import { useState } from 'react'

import { ModuleBranch } from '../components/ModuleBranch'

import '../styles/menuNavigation.scss'

export function Menu() {

    const [isModuleOpen, setModuleOpen] = useState(true)

    return (
        <div id="menu">
            <ul id="firstUl">
                <li>
                    <Link className="noDropdown" to="/politica-de-suporte">Política de Suporte</Link>

                </li>
                <li>
                    <Link className="noDropdown" to="/requisitos-instalacao">Requisitos de Sistema e Instalação</Link>

                </li>
                <li>

                    <input type="checkbox" checked name="" id="module" />
                    <div className="withLabel" >
                        <label className="" htmlFor="module" onClick={() => { setModuleOpen(!isModuleOpen) }} ></label>
                        <Link className="withDropdown" to="/">Módulos - MyCore</Link>
                    </div>


                    {isModuleOpen ?
                        <ModuleBranch />
                        : null}

                </li>
            </ul>
        </div>
    )
}