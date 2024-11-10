/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const info = {
        name: 'Habibur Rahman',
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;