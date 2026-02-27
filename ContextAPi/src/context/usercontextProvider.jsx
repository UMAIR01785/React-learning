import React from "react";
import usercontext from "./usercontext";
import { useState } from "react";


const UserContextProvider=({children})=>{
    const [user,setuser]=useState(null)

    return(
        <usercontext.Provider value={{user,setuser}}>
            {children}
        </usercontext.Provider>
    )
}

export default UserContextProvider