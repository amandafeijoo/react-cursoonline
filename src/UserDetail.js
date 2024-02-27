import useFetch from "./hooks/useFetch"

const UserDetail = () => {
    const  userInfo = useFetch('https://jsonplaceholder.typicode.com/users/1')

    return <div>
    <p>Username:{userInfo.username}</p>
    <p>Email:{userInfo.email}</p>
    </div>

    }
export default UserDetail