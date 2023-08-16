import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context structure using an interface
interface IMenuContext {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void

}

const defaultValue: IMenuContext = { // define the default value
    isOpen: false,
    setIsOpen: () => { }
};

// Context is created with the default value
export const MenuContext = createContext<IMenuContext>(defaultValue);

// Define the props expected by MenuProvider
interface MenuProviderProps {
    children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <MenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuContext.Provider>
}

export const useMenuContext = () => useContext(MenuContext);