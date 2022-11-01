import UserIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import '../css/Login.css'
import { useAuth } from "./Auth";
const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const location = useLocation()
    const redirectPath = location.state?.path || '/page-a'

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handleLogin = () => {
        if (username.length > 0) {
            auth?.login(username)
            navigate(redirectPath, { replace: true })
        } else
            alert('Invalid username!')
    }

    return (
        <div className="container fontLink">
            <p className="title">Login</p>
            <p className="accountInfo">Username</p>
            <div className="accountInfoHolder">
                <UserIcon></UserIcon>
                <input onChange={handleChange}
                    className="accountInput"
                    placeholder="Type your username" />
            </div>
            <button onClick={handleLogin} className="loginButton">LOGIN</button>
        </div>
    )
}

export default Login