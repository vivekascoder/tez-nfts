import { createContext, useContext } from "react";
import useFirebaseAuth from "./useFirebaseAuth";

const AuthContext = createContext({
  user: null,
  loading: true,
});

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Making a hook to ease the process of using context.
export const useAuth = () => useContext(AuthContext);
