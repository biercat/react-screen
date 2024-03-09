//用于包裹整个应用，并提供状态和dispatch函数
import React, {createContext, useReducer } from 'react';
import {reducer,initialState} from './reducer';

export const AppContext = createContext(initialState);


export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

// export default StateProvider;