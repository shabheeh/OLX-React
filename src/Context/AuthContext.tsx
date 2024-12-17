import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  googleSignIn: (setIsOpenLogin: (isOpen: boolean) => void) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async (setIsOpenLogin: (isOpen: boolean) => void) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(getFirestore(), "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }, { merge: true });

        setUser(user);
        setIsOpenLogin(false);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const value = { user, googleSignIn, logOut };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};
