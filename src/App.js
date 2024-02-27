import './App.css';
import TodoList from './TodoList';
import UserDetail from './UserDetail';
import UserList from './UserList';
// // import Forms from './components/Forms';
// import Dogs from './components/Dogs';
// // import PokemonList from './components/PokemonList';
// // import Counter from './components/Counter';

function App() {
   
    return (
      <div className="App">
           {/* <Forms/>

           <Dogs name = "India" colors = {["browm", "white"]} age = {7} img = "https://salchichascolombia.com/wp-content/uploads/2022/05/IMG_5542-1-793x1024.jpeg" >
           hello!!
           </Dogs>
           <Dogs name = "Scooby" colors = {["yellow", "white"]}age ={5} img = "https://salchichascolombia.com/wp-content/uploads/2022/05/IMG_5542-1-793x1024.jpeg" >
           Woof!!
           </Dogs>
           */}

          <TodoList/>
          <hr/>
          <UserList/>
           <hr/>
           <UserDetail/>
           {/* <PokemonList/>
           <Counter/> */}
          
      </div>
    );
  }

  
export default App;
