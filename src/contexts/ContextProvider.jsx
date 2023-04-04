import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);

    const toggleSidebar = (isVisible) => {
        setSidebarVisible(!isVisible);
    }
    
    const toggleNavbar = (isVisible) => {
        setNavbarVisible(!isVisible);
    }

    return (
        <StateContext.Provider
            value={{

                sidebarVisible,
                toggleSidebar, 
                navbarVisible, 
                toggleNavbar
            }
            }
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);