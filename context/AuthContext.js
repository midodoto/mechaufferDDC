import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, authSecond, getUserById } from '../config/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const userDetail = await getUserById(user.uid);
          setUser({
            uid: user.uid,
            ...userDetail,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      } catch (e) {
        logout();
      }
    });

    return () => unsubscribe();
  }, []);

  const removeParrainFirstUserState = () => {
    const cpyUser = { ...user };
    cpyUser.additionalData.user = null;
    // user.additional
    setUser(cpyUser);
  };

  const signup = (email, password, second = false) => {
    if (second === false) return createUserWithEmailAndPassword(auth, email, password);
    else {
      return createUserWithEmailAndPassword(authSecond, email, password);
    }
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (userId) => {
    const userDetail = await getUserById(userId);
    setUser({
      uid: userId,
      ...userDetail,
    });
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser, removeParrainFirstUserState }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
