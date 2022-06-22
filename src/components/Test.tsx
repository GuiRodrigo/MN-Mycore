import { ItemFromList } from "./ItemFromList";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { data, moduleBranch } from '../utils/ServiceFormData'
import '../styles/menuNavigation.scss'

export function Test() {

    const [isModuleBranchOpen, setModuleBranchOpen] = useState(false)

    return (
        < section id="lateralMenu" >
            <div id="menu">
                <ul id="firstUl">
                    <li><Link className="noDropdown" to="/politica-de-suporte"> Politica de Suporte </Link></li>
                    <li><Link className="noDropdown" to="#"> Requisitos de Sistema e Instalação </Link></li>
                    {data.map(item => {
                        return (
                            <ItemFromList
                                onClick={() => setModuleBranchOpen(!isModuleBranchOpen)}
                                nameInput={item.nameInput}
                                id={item.id}
                                navigation={item.navigation}
                                title={item.title}
                                classDivDropDown={item.classDiv}
                                classLabelDropDown={item.classLabel}
                                classLinkDropDown={item.classLink}
                            />

                        )
                    })}

                    <ul>
                        {isModuleBranchOpen ?
                            moduleBranch.map(item => {
                                return (
                                    <ItemFromList
                                        nameInput={item.nameInput}
                                        id={item.id}
                                        navigation={item.navigation}
                                        title={item.title}
                                        classDivDropDown={item.classDiv}
                                        classLabelDropDown={item.classLabel}
                                        classLinkDropDown={item.classLink}
                                    />
                                )
                            })
                            : null
                        }
                        <ul>
                            ok
                        </ul>
                    </ul>

                </ul>
            </div>
        </section>
    )
}