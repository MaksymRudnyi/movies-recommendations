import React, { useReducer, createContext } from 'react';
import defaultContext from "./defaultContext";

const AppContext = createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return defaultContext;
        case "setLocale":
            return { ...state, locale: action.locale };
    }
};

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };