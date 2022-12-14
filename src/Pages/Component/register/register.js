import React,{ useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './register.css'

const Register = () =>{
    
    const navigate = useNavigate();
    const confirm = () => {
        navigate('/login')
    }


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e =>{
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () =>{
        const {name, email , password , reEnterPassword } = user 
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", user)
            .then(res => {
                alert(res.data.message)
                navigate("/login")
            })
        }else{
            alert("invalid input")
        }
        
    }

    return(
     <div className="Register">
        <h1>Register</h1>
        <div className="sign_in">
            <input type="name" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange }/> 
            <input type="email" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }/> 
            <input type="password" name="password" value={user.password} placeholder="Enter your Password"  onChange={ handleChange }/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re - Enter your Password"  onChange={ handleChange }/>
            <div className="button" onClick={register}>Register</div>  
            <div>OR</div>
            <div className="button"  onClick={confirm}>Login</div>   
        </div>
     </div>   
    )
}   
export default Register;