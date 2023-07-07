import { Context } from "react";
import AdminContextType from "./admin-context-type";
import React from "react";

const AdminContext = React.createContext<AdminContextType>({
  isAdmin: null,
  setIsAdmin: () => {},
});

export default AdminContext;