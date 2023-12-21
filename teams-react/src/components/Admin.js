import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { baseUrl } from "../globals"

export default function Admin(){
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState([]);
    axios.get(
        baseUrl + 'admin/users',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        }
    )
    .then(response => {
        setUsers(response.data)
    })
    .catch((error)=>console.log(error));
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <>
            <h1>Admin</h1>
            <nav>
            <Link to="/messages/">messages</Link>
            <Link to="/messages/">create a user</Link>
            <Link to="/messages/">see all users</Link>
            </nav>
            <form onSubmit={handleSubmit}>
                <input type="search" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
                <button type="submit">search</button>
            </form>
            {users.map((u,i)=><p key={i}>u.name</p>)}
        </>
        
    )
}