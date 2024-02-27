
import useFetch from "./hooks/useFetch"

const  UserList = () => {

    const users = useFetch('https://jsonplaceholder.typicode.com/users')
    
    return <ul> {users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
}


export default UserList