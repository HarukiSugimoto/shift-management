import { createContext, useContext, useState, } from "react";

interface DrawerContextType {
    isOpen: boolean;
    toggleDrawer: () => void;
    setDrawer: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => setIsOpen(prev => !prev);

    const setDrawer = (open: boolean) => setIsOpen(open);

    return (
        <DrawerContext.Provider value={{ isOpen, toggleDrawer, setDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = (): DrawerContextType => {
    const context = useContext(DrawerContext);
    if (!context) throw new Error("useDrawer must be used within DrawerProvider");
    return context;
};
