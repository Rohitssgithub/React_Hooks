import React, { useContext, createContext, useState } from 'react'
let userContext = createContext()

const UseReducer = ({ Children }) => {

    let [name, setName] = useState('rohit')
    return (
        <>
            <userContext.Provider value={{ name }}>
                {Children}
            </userContext.Provider>
        </>
    )
}

export { UseReducer, userContext }