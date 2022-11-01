import { NavLink } from 'react-router-dom'
import { useAuth } from "./Auth";
import "../css/Navbar.css"
import { useState } from 'react';

const Navbar = () => {
    const auth = useAuth()
    const [isLogout, setIsLogout] = useState(true)
    const handleLogout = () => {
        auth?.logout()
        setIsLogout(false)
    }
    return (
        <nav className='navbar'>
            <NavLink className="navitem" to='/page-a'>Page A</NavLink>
            <NavLink className="navitem" to='/page-b'>Page B</NavLink>
            <NavLink className="navitem" to='/page-c'>Page C</NavLink>
            <NavLink className="navitem" to='/login'>Login</NavLink>
            {localStorage.getItem('user') != null && <NavLink className="navitem logoutButton" onClick={handleLogout} to='/'>Logout</NavLink>}
        </nav>
    )
}

export default Navbar