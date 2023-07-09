import { createContext } from "react";

interface DisplayModalContextValue{
    displayModal: boolean;
    setDisplayModal: (value: boolean)=> void;
}

export const DisplayModalContext = createContext<DisplayModalContextValue>({
    displayModal: false,
    setDisplayModal(){}
});