interface AdminContextType {
    isAdmin: boolean | null;
    setIsAdmin: (isAdmin: boolean | null) => void;
}

export default AdminContextType;