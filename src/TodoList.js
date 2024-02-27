
import useFetch from "./hooks/useFetch"

const  TodoList = () => {
    

    const todos = useFetch('https://jsonplaceholder.typicode.com/todos')


    return <ul> 
    {todos.map(todo => <li key = {todo.id}>{todo.title}</li>)}
    </ul>
}


export default TodoList