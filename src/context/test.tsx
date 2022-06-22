import { createContext } from "react";


const InitialValue = {
    isClientBranchOpen: false,
    setClientBranchOpen: () => { }
}


export const MenuContext = createContext(InitialValue)