import React, { createContext, useState } from 'react';
export const styleContext = createContext(null);

const StyleProvider = ({children}) => {
    const [a,setA] = useState('');
    const value = {
        a,setA
    }
    return (
        <styleContext.Provider value={value}>{children}</styleContext.Provider>
    );
};

export default StyleProvider;