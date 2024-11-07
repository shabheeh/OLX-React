// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; // Import Firestore functions if needed

interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);
// Provide the AuthContext to children components
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Google Sign-In function
  const googleSignIn = async (setIsOpenLogin) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // Save user data to Firestore
        await setDoc(doc(getFirestore(), "users", user.uid), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }, { merge: true });
        
        setUser(user);
        setIsOpenLogin(false)
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Log-out function
  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Set up an observer for changes in the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Context value to be used by components
  const value = { user, googleSignIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



  

