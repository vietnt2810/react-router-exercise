import { NavLink } from 'react-router-dom'
import { useAuth } from "./Auth";
import "../css/Navbar.css"

const Navbar = () => {
    const auth = useAuth()
    return (
        <nav className='navbar'>
            <NavLink className="navitem" to='/page-a'>Page A</NavLink>
            <NavLink className="navitem" to='/page-b'>Page B</NavLink>
            <NavLink className="navitem" to='/page-c'>Page C</NavLink>
            <NavLink className="navitem" to='/login'>Login</NavLink>
            {auth?.user && <NavLink className="navitem logoutButton" onClick={auth.logout} to='/'>Logout</NavLink>}
        </nav>
    )
}

export default Navbar