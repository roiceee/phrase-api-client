import { use, useCallback, useEffect, useState } from "react";
import AdminContext from "./admin-context";
import { useAuth0 } from "@auth0/auth0-react";

interface AdminContextProviderProps {
    children: React.ReactNode;
}

function AdminContextProvider({children}: AdminContextProviderProps) {

    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const {isAuthenticated, getIdTokenClaims} = useAuth0();


    const checkIfAdmin = useCallback (async () => {
        setIsAdmin(null);
        try {
            const idToken = await getIdTokenClaims();
            if (!idToken) {
                setIsAdmin(null);
                return;
            }
            const array = idToken["https://phraseapi.vercel.app/roles"];
           
            if (array[0] === "admin") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (error) {
            console.log(error);
            setIsAdmin(false);
        }
    }, [getIdTokenClaims]);

    useEffect(() => {
        if (isAuthenticated) {
            checkIfAdmin();
        }
    }, [isAuthenticated, checkIfAdmin]);
    
    return ( 
        <AdminContext.Provider value={{isAdmin: isAdmin, setIsAdmin: setIsAdmin}}>
            {children}
        </AdminContext.Provider>
     );
}

export default AdminContextProvider;