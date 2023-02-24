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
                    const userDetail = await getUserById(user.uid);
                    console.log('userDetail', userDetail)
                    setUser({
                        uid: user.uid,
                        ...userDetail,
                    })
                } else {
                    setUser(null)
                }
                setLoading(false)
            } catch (e) {
            
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
    
    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }
    
    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
