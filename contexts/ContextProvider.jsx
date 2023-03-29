import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = (isVisible) => {
        setSidebarVisible(!isVisible);
    }

    return (
        <StateContext.Provider
            value={{

                sidebarVisible,
                toggleSidebar
            }
            }
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);