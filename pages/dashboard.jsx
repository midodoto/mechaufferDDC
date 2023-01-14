import React, {useContext} from 'react'
import {ThemeContext} from "styled-components";
import ButtonPrimary from "../components/library/button/primary.jsx";
import {useAuth} from "../context/AuthContext.js";

const Dashboard = () => {
    const { user, logout } = useAuth()
    const themeContext = useContext(ThemeContext)
    
    const handleLogout = async (e) => {
        e.preventDefault()
    
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <>
            <div>Heyyyyy, {user.email}</div>
            <ButtonPrimary type="submit" width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false} onClick={(e) => handleLogout(e)}>Logout</ButtonPrimary>
        </>
)
}

export default Dashboard
