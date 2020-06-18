import React from 'react'
import { useAuth } from 'react-use-auth'

const Navbar = () => {
    const {isAuthenticated, login, logout} = useAuth()
    
    return (
        <nav style={{marginBottom:'20px'}}>
            <button onClick={()=>login()}>Login</button>
            <button onClick={()=>logout()}>Logout</button>
        </nav>
    )
}

export default Navbar
