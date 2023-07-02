import { Context } from "react";
import AdminContextType from "./admin-context-type";
import React from "react";

const AdminContext = React.createContext<AdminContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
});

export default AdminContext;