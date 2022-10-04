import React,{ useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './login.css'

const Login = ({setLoginUser}) =>{

    const navigate = useNavigate();
    const confirm = () => {
        navigate('/register')
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e =>{
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () =>{
        const {email , password } = user 
        axios.post("http://localhost:8000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }

    return(
     <div className="login">
        <h1>Login</h1>
        <div className="sign_in">
            <input type="email" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }/> 
            <input type="password" name="password" value={user.password} placeholder="Enter your Password"  onChange={ handleChange }/>
            <div className="button" onClick={login}>Login</div>  
            <div>OR</div>
            <div className="button" onClick={confirm}>Register</div>   
        </div>
     </div>   
    )
}   
export default Login;