/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { ComponenState } from "../components/state";

export const UserContext = createContext()

export const useData = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name : 'Hani',
        email : 'hani@gmail.com'
    }) 
    return (
        <UserContext.Provider value={user}>
            {/* <ComponenState> */}
            {children}
            {/* </ComponenState> */}
        </UserContext.Provider>
    )
}

export default UserProvider


