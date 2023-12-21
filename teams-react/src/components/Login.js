import { useState } from "react"
import axios from "axios"
import { baseUrl } from "../globals"
import { useNavigate } from "react-router-dom";


export default function Login(){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        setMessage('')
        axios.post(
            baseUrl + 'login',
            {
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(response => {
            localStorage.setItem('user', JSON.stringify({
                'token':response.data.access_token,
                'role':response.data.role,
                'username':username
            }))
            switch(response.data.role){
                case 'student':navigate('/student/');break;
                case 'teacher':navigate('/teacher/');break;
                case 'admin':navigate('/admin/');break;
                default: console.log('not a valid role')
            }
            
        })
        .catch((error)=>setMessage('Could not login wrong username or password!'));
    }
    return (
        <div className="form">
            <h2>Log in to your account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">login</button>
            </form>
            <p className="warning">{message}</p>
        </div>
    )
}