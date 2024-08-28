import UserForm from "./UserForm";
import UserTable from "./UserTable";
import users from './userData'

const User = () =>{
    return(
        <div>
            <UserTable rows={users}/>
        </div>
    );
}

export default User;