import { Link } from "react-router-dom";

type LiProps = {
    onClick?: () => void,
    nameInput: string,
    navigation: string,
    title: string,
    id: string,
    classLabelDropDown: string,
    classDivDropDown: string,
    classLinkDropDown: string,
}

export function ItemFromList({ classLinkDropDown, classDivDropDown, classLabelDropDown, nameInput, id, navigation, title, onClick }: LiProps) {


    return (

        < li >
            <input type="checkbox" name={nameInput} id={id} />
            <div className={classDivDropDown}>
                <label className={classLabelDropDown} onClick={onClick} htmlFor={id}></label>
                <Link className={classLinkDropDown} to={navigation}> {title} </Link>
            </div>
        </li>
    )
}
