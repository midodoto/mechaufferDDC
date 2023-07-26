import { createContext, useContext, useEffect, useState } from 'react'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import {auth, getUserById} from '../config/firebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children,}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    console.log("USERRR", user)
                    const userDetail = await getUserById(user.uid);
                    console.log("userDetail", userDetail)
                    setUser({
                        uid: user.uid,
                        ...userDetail,
                    })
                } else {
                    setUser(null)
                }
                setLoading(false)
            } catch (e) {
                logout();
                console.log("GHASSAN");
            }

        })
        
        return () => unsubscribe()
    }, [])
    
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = async (userId) => {
        const userDetail = await getUserById(userId);
        setUser({
            uid: userId,
            ...userDetail,
        })
    }


    
    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }
    
    return (
        <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
