import { createContext, useContext, useReducer } from "react";
import React from 'react';

export const StateContext = createContext(); //Se crea capa de Context API

//State provider proveera la herramienta para pasar los datos de un componente a otro
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//useStateValue permitira consumir desde cualquier componente los cambios de estado de InitialState
export const useStateValue = () => useContext(StateContext);