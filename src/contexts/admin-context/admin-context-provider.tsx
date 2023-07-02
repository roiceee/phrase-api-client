import { use, useCallback, useEffect, useState } from "react";
import AdminContext from "./admin-context";
import { useAuth0 } from "@auth0/auth0-react";

interface AdminContextProviderProps {
    children: React.ReactNode;
}

function AdminContextProvider({children}: AdminContextProviderProps) {

    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();


    const checkIfAdmin = useCallback (async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/check`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
            if (response.ok) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (error) {
            console.log(error);
            setIsAdmin(false);
        }
    }, [getAccessTokenSilently]);

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