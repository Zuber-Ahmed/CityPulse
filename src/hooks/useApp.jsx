import { useContext } from "react";
import AppContext from "../contexts/State/State";
const useApp=()=> {
        const context = useContext(AppContext);
        if (!context) {
            throw new Error('useApp must be used within an AppProvider');
        }
        return context;
    }

export default useApp;