import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import axios, { Axios } from 'axios';

const User = () =>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = () => {
        axios.get('http://localhost:5000/api/users')
            .then(response =>{
                setUsers(response.data?.response || [])
                
            })
            .catch(error=>{
                console.error("Axios Error:", error);
            })
    }


    return(
        <div>
            <UserTable rows={users}/>
        </div>
    );
}

export default User;